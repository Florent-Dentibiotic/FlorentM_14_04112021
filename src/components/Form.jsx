import { useState } from 'react';
import { useStore } from 'react-redux';
import { departments } from '../assets/json/departments';
import { states } from '../assets/json/states';
import submitForm from '../helpers/submitForm';
import Input from './Input';
import Select from './Select';

const initialEmployeeState = {
    stateName: states[0].abbreviation,
    department: departments[0].abbreviation,
};

export default function Form({ setModal, setModalContent }) {
    const store = useStore();
    const [employee, setEmployeeState] = useState(initialEmployeeState);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [stateName, setStateName] = useState(states[0].abbreviation);
    const [department, setDepartment] = useState(departments[0].abbreviation);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setEmployeeState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
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
                            setElement={handleChange}
                        />
                    </div>
                    <Input
                        label="Date of Birth"
                        name="birthdate"
                        type="date"
                        setElement={handleChange}
                    />
                    <Input
                        label="Last Name"
                        name="lastName"
                        type="text"
                        setElement={handleChange}
                    />
                    <Input
                        label="Start Date"
                        name="startdate"
                        type="date"
                        setElement={handleChange}
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
                        setElement={handleChange}
                        value={street}
                    />
                    <Input
                        label="City"
                        name="city"
                        type="text"
                        setElement={handleChange}
                        value={city}
                    />
                    <Select
                        label="State"
                        name="stateName"
                        options={states}
                        setElement={handleChange}
                    />
                    <Input
                        label="Zipcode"
                        name="zipcode"
                        type="number"
                        setElement={handleChange}
                        value={zipcode}
                        max="99999"
                    />
                </div>
                <div className="px-2">
                    <Select
                        label="Department"
                        name="department"
                        options={departments}
                        setElement={handleChange}
                    />
                </div>
                <div className="flex justify-center p-5">
                    <button
                        className="text-white font-black w-24 bg-green-900 hover:bg-green-700 p-2 rounded"
                        onClick={(e) => {
                            console.log(employee);
                            submitForm(
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
                            );
                        }}
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
