import { selectEmployee } from '../utils/selector';
import {
    employeesFetching,
    employeesResolved,
    employeesRejected,
} from '../reducers/employeesReducer';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './Firebase';
import EmployeeMapper from '../mapping/EmployeeMapper';

export async function employeeService(store) {
    const status = selectEmployee(store.getState()).status;
    if (status === 'pending' || status === 'updating') {
        return;
    }
    store.dispatch(employeesFetching());
    try {
        const employees = collection(db, 'Employees-list');
        const employeesSnapshot = await getDocs(employees);
        const employeesList = employeesSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        const employeesListMapped = employeesList.map((employee) =>
            EmployeeMapper.convertToEmployee(employee)
        );
        console.log(employeesListMapped);
        store.dispatch(employeesResolved(employeesListMapped));
    } catch (error) {
        console.log(error.message);
        store.dispatch(employeesRejected(error.message));
    }
}
