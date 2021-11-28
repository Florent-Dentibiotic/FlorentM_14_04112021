import { useState } from 'react';
import { useStore } from 'react-redux';
import { departments } from '../assets/json/departments';
import { states } from '../assets/json/states';
import { addEmployeeService } from '../services/addEmployeeService';
import Input from './Input';
import Select from './Select';

const regexName = /^[a-zA-Z]+[a-zA-Z'-]?[a-zA-Z]+$/;
//const regexAddress = /(\d+) ((\w+[ ,])+ ){2}([A-Z]){2} (\d){5}/;
const regexCity = /^[a-zA-Z]+(?:[\s-'.&/][a-zA-Z]+)*(?:[.|\s])?(?:[(a-z)])*$/;
const regexZipcode = /^[0-9]{5}$/;
const regexDate = /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;

export default function From({ setModal, setModalContent }) {
    const store = useStore();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [stateName, setStateName] = useState(states[0].abbreviation);
    const [department, setDepartment] = useState(departments[0].abbreviation);

    const handleSubmit = (e) => {
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
            addEmployeeService(store, employeeData);
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
    };

    return (
        <>
            <form className="p-2">
                <div className="grid gap-1 grid-cols-2 mb-2">
                    <div>
                        <Input
                            label="First Name"
                            name="firstName"
                            type="text"
                            setElement={setFirstName}
                            value={firstName}
                        />
                    </div>

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
                        options={states}
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
                        options={departments}
                        setElement={setDepartment}
                        value={department}
                    />
                </div>
                <div className="flex justify-center p-5">
                    <button
                        className="text-white font-black w-24 bg-green-900 hover:opacity-100 p-2 opacity-80 rounded"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
