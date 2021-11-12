import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCOhQsYY_P6e8GAhNVmGP1yf2zCslaP11Q',
    authDomain: 'hrnet-7a7fe.firebaseapp.com',
    projectId: 'hrnet-7a7fe',
    storageBucket: 'hrnet-7a7fe.appspot.com',
    messagingSenderId: '816336692176',
    appId: '1:816336692176:web:cb057d71cfb138a4e18fd5',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function Firebase() {
    const [allEmployees, setEmployeesList] = useState();

    useEffect(() => {
        // Get a list of cities from your database
        async function getEmployees(db) {
            const employees = collection(db, 'Employees-list');
            const employeesSnapshot = await getDocs(employees);
            const employeesList = employeesSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            return setEmployeesList(employeesList);
        }

        getEmployees(db);
    }, []);
    return allEmployees;
}
