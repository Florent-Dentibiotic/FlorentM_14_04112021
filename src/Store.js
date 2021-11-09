import { combineReducers, createStore } from 'redux';
import employeeReducer from './reducers/employeesReducer';

const reduxDevtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
    employee: employeeReducer,
});

export const store = createStore(reducer, reduxDevtools);
