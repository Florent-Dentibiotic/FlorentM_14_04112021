import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { selectEmployee } from '../Selectors/selector';
import {
    employeesFetching,
    employeesResolved,
    employeesRejected,
} from '../reducers/employeesReducer';

const firebaseConfig = {
    apiKey: 'AIzaSyCOhQsYY_P6e8GAhNVmGP1yf2zCslaP11Q',
    authDomain: 'hrnet-7a7fe.firebaseapp.com',
    projectId: 'hrnet-7a7fe',
    storageBucket: 'hrnet-7a7fe.appspot.com',
    messagingSenderId: '816336692176',
    appId: '1:816336692176:web:cb057d71cfb138a4e18fd5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
        store.dispatch(employeesResolved(employeesList));
    } catch (error) {
        console.log(error.message);
        store.dispatch(employeesRejected(error.message));
    }
}
