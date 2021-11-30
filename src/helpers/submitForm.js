import { employeeService2 } from '../services/EmployeeService';
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../services/Firebase';

const regexName = /^[a-zA-Z]+[a-zA-Z'-]?[a-zA-Z]+$/;
//const regexAddress = /(\d+) ((\w+[ ,])+ ){2}([A-Z]){2} (\d){5}/;
const regexCity = /^[a-zA-Z]+(?:[\s-'.&/][a-zA-Z]+)*(?:[.|\s])?(?:[(a-z)])*$/;
const regexZipcode = /^[0-9]{5}$/;
const regexDate = /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;

export default function submitForm(
    e,
    store,
    firstName,
    lastName,
    birthdate,
    startDate,
    street,
    city,
    zipcode,
    stateName,
    department,
    setModalContent,
    setModal,
    setFirstName,
    setLastName,
    setBirthdate,
    setStartDate,
    setStreet,
    setCity,
    setZipcode,
    setStateName,
    setDepartment
) {
    const employees = collection(db, 'Employees-list');
    if (
        regexName.test(firstName) &&
        regexName.test(lastName) &&
        regexDate.test(birthdate) &&
        regexDate.test(startDate) &&
        street.length > 1 &&
        regexCity.test(city) &&
        regexZipcode.test(zipcode)
    ) {
        const employeeData = {
            firstName: firstName,
            lastName: lastName,
            birthdate: birthdate,
            startDate: startDate,
            street: street,
            city: city,
            zipcode: zipcode,
            stateName: stateName,
            department: department,
        };
        employeeService2(store, addDoc(employees, employeeData));
        setModalContent('Employee Created!');
        setModal(true);
        setFirstName('');
        setLastName('');
        setBirthdate('');
        setStartDate('');
        setStreet('');
        setCity('');
        setZipcode('');
        setStateName('');
        setDepartment('');
    } else {
        setModalContent('Merci de remplir tous les champs.');
        setModal(true);
    }
    e.preventDefault();
    e.stopPropagation();
}
