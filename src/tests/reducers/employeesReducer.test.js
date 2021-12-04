import * as actions from '../../reducers/employeesReducer';
import employeeReducer from '../../reducers/employeesReducer';

describe('Actions', () => {
    it('should create a Fetching action objet', () => {
        expect(actions.employeesFetching()).toEqual({
            type: 'employees/fetching',
        });
    });

    it('should create a Resolved action objet', () => {
        expect(actions.employeesResolved('data')).toEqual({
            type: 'employees/resolved',
            payload: 'data',
        });
    });

    it('should create a Rejected action objet', () => {
        expect(actions.employeesRejected('error')).toEqual({
            type: 'employees/rejected',
            payload: 'error',
        });
    });
});

describe('Employee reducer', () => {
    it('should return the initial state when state is undefined', () => {
        expect(employeeReducer(undefined, { type: '@INIT' })).toEqual({
            status: 'void',
            data: null,
            error: null,
        });
    });
    it('should add data on fetching', () => {
        expect(
            employeeReducer(
                { data: null, error: null, status: 'void' },
                actions.employeesFetching()
            )
        ).toEqual({ data: null, error: null, status: 'pending' });
    });

    it('should resolve employee', () => {
        const state = employeeReducer(
            { data: null, error: null, status: 'pending' },
            actions.employeesResolved({
                employeesData: [],
            })
        );
        expect(state.status).toBe('resolved');
    });

    it('should switch to pending when fetching on rejected', () => {
        const state = employeeReducer(
            { data: null, error: null, status: 'rejected' },
            actions.employeesFetching()
        );
        expect(state.status).toBe('pending');
    });

    it('should switch to updating when fetching on resolved', () => {
        const state = employeeReducer(
            { data: [], error: null, status: 'resolved' },
            actions.employeesFetching()
        );
        expect(state.status).toBe('updating');
        expect(state.data).toEqual([]);
    });

    it('should stay to pending when fetching on pending', () => {
        const state = employeeReducer(
            { data: [], error: null, status: 'pending' },
            actions.employeesFetching()
        );
        expect(state.status).toBe('pending');
    });

    it('should ignore rejected on resolved', () => {
        const state = employeeReducer(
            { data: [], error: null, status: 'resolved' },
            actions.employeesRejected('Fail')
        );
        expect(state.status).toBe('resolved');
        expect(state.data).toEqual([]);
    });

    it('should stay to resolved when resolved on resolved', () => {
        const state = employeeReducer(
            { data: null, error: null, status: 'resolved' },
            actions.employeesResolved({
                employeesData: [],
            })
        );
        expect(state.status).toBe('resolved');
    });

    it('should switch to rejected when rejected on pending', () => {
        const state = employeeReducer(
            { data: null, error: true, status: 'pending' },
            actions.employeesRejected({
                error: '404 not found',
            })
        );
        expect(state.status).toBe('rejected');
        expect(state.error).toStrictEqual({ error: '404 not found' });
    });
});
