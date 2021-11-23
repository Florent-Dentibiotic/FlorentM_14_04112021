import { useState } from 'react';
import { useStore } from 'react-redux';
import { addEmployeeService } from '../services/addEmployeeService';
import Input from './Input';
import Select from './Select';

const regexName = /^[a-zA-Z]+[a-zA-Z'-]?[a-zA-Z]+$/;

export default function From({ setModal }) {
    const store = useStore();
    //const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [stateName, setStateName] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e) => {
        if (regexName.test(firstName) && regexName.test(lastName)) {
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
            addEmployeeService(store, employeeData);
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
        }
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <>
            <form className="p-2">
                <div className="flex flex-wrap justify-between mb-2">
                    <Input
                        label="First Name"
                        name="firstName"
                        type="text"
                        setElement={setFirstName}
                        value={firstName}
                    />
                    <Input
                        label="Date of Birth"
                        name="birthdate"
                        type="date"
                        setElement={setBirthdate}
                        value={birthdate}
                    />
                    <Input
                        label="Last Name"
                        name="lastName"
                        type="text"
                        setElement={setLastName}
                        value={lastName}
                    />
                    <Input
                        label="Start Date"
                        name="startdate"
                        type="date"
                        setElement={setStartDate}
                        value={startDate}
                    />
                </div>
                <hr className="shadow" />
                <h2 className="ml-4 pt-2">Adress</h2>
                <div className="p-2 flex flex-col justify-between m-2 border-black rounded border-2">
                    <Input
                        label="Street"
                        name="street"
                        type="text"
                        setElement={setStreet}
                        value={street}
                    />
                    <Input
                        label="City"
                        name="city"
                        type="text"
                        setElement={setCity}
                        value={city}
                    />
                    <Select
                        label="State"
                        name="state"
                        optionsType="state"
                        setElement={setStateName}
                        value={stateName}
                    />
                    <Input
                        label="Zipcode"
                        name="zipcode"
                        type="number"
                        setElement={setZipcode}
                        value={zipcode}
                        max="99999"
                    />
                </div>
                <div className="px-2">
                    <Select
                        label="Department"
                        name="department"
                        optionsType="department"
                        setElement={setDepartment}
                        value={department}
                    />
                </div>
                <div className="flex justify-center p-5">
                    <button
                        className="text-white font-black w-24 bg-green-900 hover:opacity-100 p-2 opacity-80 rounded"
                        onClick={handleSubmit}
                        //type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
