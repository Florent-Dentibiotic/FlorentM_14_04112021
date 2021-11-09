import { getDatabase, ref, set } from 'firebase/database';

export default function writeUserData(employeeData) {
    const db = getDatabase();
    set(
        ref(db, 'Employees-list'),
        employeeData
        // firstName: firstName,
        // lastName: lastName,
        // birthdate: birthdate,
        // startDate: startDate,
        // street: street,
        // city: city,
        // zipcode: zipcode,
        // stateName: stateName,
        // department: department,
    );
}
