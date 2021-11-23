import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../reducers/employeesReducer';

export const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
