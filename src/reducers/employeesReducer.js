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

export const setReduxFirstName = (firstName) => ({
    type: 'setReduxFirstName',
    payload: { firstName: firstName },
});

export const setReduxLastName = (lastName) => ({
    type: 'setReduxLastName',
    payload: { lastName: lastName },
});

export const setReduxBirthdate = (birthdate) => ({
    type: 'setReduxBirthdate',
    payload: { birthdate: birthdate },
});

export const setReduxStartDate = (startDate) => ({
    type: 'setReduxStartDate',
    payload: { startDate: startDate },
});

export const setReduxStreet = (street) => ({
    type: 'setReduxStreet',
    payload: { street: street },
});

export const setReduxCity = (city) => ({
    type: 'setReduxCity',
    payload: { city: city },
});

export const setReduxZipcode = (zipcode) => ({
    type: 'setReduxZipcode',
    payload: { zipcode: zipcode },
});

export const setReduxStateName = (stateName) => ({
    type: 'setReduxStateName',
    payload: { stateName: stateName },
});

export const setReduxDepartment = (department) => ({
    type: 'setReduxDepartment',
    payload: { department: department },
});

// USER REDUCER

export default function employeeReducer(state = employeeState, action) {
    return produce(state, () => {
        switch (action.type) {
            case 'setReduxFirstName': {
                const firstName = action.payload.firstName;
                return produce(state, (draft) => {
                    draft.user.firstName = firstName;
                });
            }
            case 'setReduxLastName': {
                const lastName = action.payload.lastName;
                return produce(state, (draft) => {
                    draft.user.lastName = lastName;
                });
            }
            case 'setReduxBirthdate': {
                const birthdate = action.payload.birthdate;
                return produce(state, (draft) => {
                    draft.user.birthdate = birthdate;
                });
            }
            case 'setReduxStartDate': {
                const startDate = action.payload.startDate;
                return produce(state, (draft) => {
                    draft.user.startDate = startDate;
                });
            }
            case 'setReduxStreet': {
                const street = action.payload.street;
                return produce(state, (draft) => {
                    draft.user.street = street;
                });
            }
            case 'setReduxCity': {
                const city = action.payload.city;
                return produce(state, (draft) => {
                    draft.user.city = city;
                });
            }
            case 'setReduxZipcode': {
                const zipcode = action.payload.zipcode;
                return produce(state, (draft) => {
                    draft.user.zipcode = zipcode;
                });
            }
            case 'setReduxStateName': {
                const stateName = action.payload.stateName;
                return produce(state, (draft) => {
                    draft.user.stateName = stateName;
                });
            }
            case 'setReduxDepartment': {
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
