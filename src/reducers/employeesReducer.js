import produce from 'immer';

export const FETCHING = 'login/fetching';
export const RESOLVED = 'login/resolved';
export const REJECTED = 'login/rejected';

// INITIAL STATE

const employeeState = {
    status: 'void',
    error: null,
    user: {
        firstName: null,
        lastName: null,
        birthdate: null,
        startDate: null,
        street: null,
        city: null,
        zipcode: null,
        stateName: null,
        department: null,
    },
};

// ACTIONS CREATOR

export const setFirstName = (firstName) => ({
    type: 'setFirstName',
    payload: { firstName: firstName },
});

export const setLastName = (lastName) => ({
    type: 'setLastName',
    payload: { lastName: lastName },
});

export const setBirthdate = (birthdate) => ({
    type: 'setBirthdate',
    payload: { birthdate: birthdate },
});

export const setStartDate = (startDate) => ({
    type: 'setStartDate',
    payload: { startDate: startDate },
});

export const setStreet = (street) => ({
    type: 'setStreet',
    payload: { street: street },
});

export const setCity = (city) => ({
    type: 'setCity',
    payload: { city: city },
});

export const setZipcode = (zipcode) => ({
    type: 'setZipcode',
    payload: { zipcode: zipcode },
});

export const setStateName = (stateName) => ({
    type: 'setStateName',
    payload: { stateName: stateName },
});

export const setDepartment = (department) => ({
    type: 'setDepartment',
    payload: { department: department },
});

// USER REDUCER

export default function employeeReducer(state = employeeState, action) {
    return produce(state, () => {
        switch (action.type) {
            case 'setFirstName': {
                const firstName = action.payload.firstName;
                return produce(state, (draft) => {
                    draft.user.firstName = firstName;
                });
            }
            case 'setLastName': {
                const lastName = action.payload.lastName;
                return produce(state, (draft) => {
                    draft.user.lastName = lastName;
                });
            }
            case 'setBirthdate': {
                const birthdate = action.payload.birthdate;
                return produce(state, (draft) => {
                    draft.user.birthdate = birthdate;
                });
            }
            case 'setStartDate': {
                const startDate = action.payload.startDate;
                return produce(state, (draft) => {
                    draft.user.startDate = startDate;
                });
            }
            case 'setStreet': {
                const street = action.payload.street;
                return produce(state, (draft) => {
                    draft.user.street = street;
                });
            }
            case 'setCity': {
                const city = action.payload.city;
                return produce(state, (draft) => {
                    draft.user.city = city;
                });
            }
            case 'setZipcode': {
                const zipcode = action.payload.zipcode;
                return produce(state, (draft) => {
                    draft.user.zipcode = zipcode;
                });
            }
            case 'setStateName': {
                const stateName = action.payload.stateName;
                return produce(state, (draft) => {
                    draft.user.stateName = stateName;
                });
            }
            case 'setDepartment': {
                const department = action.payload.department;
                return produce(state, (draft) => {
                    draft.user.department = department;
                });
            }
            default:
                return;
        }
    });
}
