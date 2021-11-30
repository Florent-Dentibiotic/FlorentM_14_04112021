import { useState } from 'react';
import { useStore } from 'react-redux';
import { departments } from '../assets/json/departments';
import { states } from '../assets/json/states';
import submitForm from '../helpers/submitForm';
import Input from './Input';
import Select from './Select';

export default function Form({ setModal, setModalContent }) {
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
                        className="text-white font-black w-24 bg-green-900 hover:bg-green-700 p-2 rounded"
                        onClick={(e) =>
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
                            )
                        }
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
