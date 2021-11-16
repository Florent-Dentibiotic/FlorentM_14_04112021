import produce from 'immer';

// INITIAL STATE

const employeeState = {
    status: 'void',
    data: null,
    error: null,
};

// ACTIONS CREATOR

export const FETCHING = 'employees/fetching';
export const RESOLVED = 'employees/resolved';
export const REJECTED = 'employees/rejected';

export const employeesFetching = () => ({ type: FETCHING });
export const employeesResolved = (data) => ({ type: RESOLVED, payload: data });
export const employeesRejected = (error) => ({
    type: REJECTED,
    payload: error,
});

// EMPLOYEE REDUCER

export default function employeeReducer(state = employeeState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCHING: {
                if (draft.status === 'void') {
                    draft.status = 'pending';
                    return;
                }
                if (draft.status === 'rejected') {
                    draft.error = null;
                    draft.status = 'pending';
                    return;
                }
                if (draft.status === 'resolved') {
                    draft.status = 'updating';
                    return;
                }
                return;
            }
            case RESOLVED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload;
                    draft.status = 'resolved';
                    return;
                }
                return;
            }
            case REJECTED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.status = 'rejected';
                    draft.error = action.payload;
                    draft.data = null;
                    return;
                }
                return;
            }
            default:
                return;
        }
    });
}
