import { useStore } from 'react-redux';
import {
    setBirthdate,
    setCity,
    setDepartment,
    setFirstName,
    setLastName,
    setStartDate,
    setStateName,
    setStreet,
    setZipcode,
} from '../reducers/employeesReducer';
import { selectEmployee } from '../Selectors/selector';
import writeUserData from '../services/WriteUserData';
import Input from './Input';
import Select from './Select';

export default function From() {
    //const colection = db.collection('Employees-list');
    const store = useStore();
    const firstName = selectEmployee(store.getState()).user.firstName;
    const lastName = selectEmployee(store.getState()).user.lastName;
    const birthdate = selectEmployee(store.getState()).user.birthdate;
    const startDate = selectEmployee(store.getState()).user.startDate;
    const street = selectEmployee(store.getState()).user.street;
    const city = selectEmployee(store.getState()).user.city;
    const zipcode = selectEmployee(store.getState()).user.zipcode;
    const stateName = selectEmployee(store.getState()).user.stateName;
    const department = selectEmployee(store.getState()).user.department;

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

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (employeeData) {
            writeUserData(employeeData);
        }
    };

    return (
        <>
            <form className="p-2" onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-between mb-2">
                    <Input
                        label="First Name"
                        name="firstName"
                        type="text"
                        setElement={setFirstName}
                    />
                    <Input
                        label="Date of Birth"
                        name="birthdate"
                        type="date"
                        setElement={setBirthdate}
                    />
                    <Input
                        label="Last Name"
                        name="lastName"
                        type="text"
                        setElement={setLastName}
                    />
                    <Input
                        label="Start Date"
                        name="startdate"
                        type="date"
                        setElement={setStartDate}
                    />
                </div>
                <hr className="shadow" />
                <h3 className="ml-4 pt-2">Adress</h3>
                <div className="p-2 flex flex-col justify-between m-2 border-black rounded border-2">
                    <Input
                        label="Street"
                        name="street"
                        type="text"
                        setElement={setStreet}
                    />
                    <Input
                        label="City"
                        name="city"
                        type="text"
                        setElement={setCity}
                    />
                    <Select
                        label="State"
                        name="state"
                        optionsType="state"
                        setElement={setStateName}
                    />
                    <Input
                        label="Zipcode"
                        name="zipcode"
                        type="number"
                        setElement={setZipcode}
                    />
                </div>
                <div className="px-2">
                    <Select
                        label="Department"
                        name="department"
                        optionsType="department"
                        setElement={setDepartment}
                    />
                </div>
                <div className="flex justify-center p-5">
                    <button
                        className="text-white bg-green-900 p-2 opacity-80 rounded"
                        //type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
