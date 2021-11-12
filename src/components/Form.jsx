import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { useStore } from 'react-redux';
import {
    setReduxBirthdate,
    setReduxCity,
    setReduxDepartment,
    setReduxFirstName,
    setReduxLastName,
    setReduxStartDate,
    setReduxStateName,
    setReduxStreet,
    setReduxZipcode,
} from '../reducers/employeesReducer';
// import { selectEmployee } from '../Selectors/selector';
// import writeUserData from '../services/WriteUserData';
import Input from './Input';
import Select from './Select';

export default function From() {
    //const store = useStore();
    const dispatch = useDispatch();
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
        if (employeeData) {
            dispatch(setReduxFirstName(firstName));
            dispatch(setReduxLastName(lastName));
            dispatch(setReduxBirthdate(birthdate));
            dispatch(setReduxStartDate(startDate));
            dispatch(setReduxStreet(street));
            dispatch(setReduxCity(city));
            dispatch(setReduxZipcode(zipcode));
            dispatch(setReduxStateName(stateName));
            dispatch(setReduxDepartment(department));
        }
        setFirstName('');
        setLastName('');
        setBirthdate('');
        setStartDate('');
        setStreet('');
        setCity('');
        setZipcode('');
        setStateName('');
        setDepartment('');
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
                <h3 className="ml-4 pt-2">Adress</h3>
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
                        className="text-white bg-green-900 p-2 opacity-80 rounded"
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
