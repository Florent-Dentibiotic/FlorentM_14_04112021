import Input from './Input';
import Select from './Select';

export default function From() {
    return (
        <>
            <form className="p-2">
                <div className="flex flex-wrap justify-between mb-2">
                    <Input label="First Name" name="firstName" type="text" />
                    <Input label="Date of Birth" name="birthdate" type="date" />
                    <Input label="Last Name" name="lastName" type="text" />
                    <Input label="Start Date" name="startdate" type="date" />
                </div>
                <hr className="shadow" />
                <h3 className="ml-4 pt-2">Adress</h3>
                <div className="p-2 flex flex-col justify-between m-2 border-black rounded border-2">
                    <Input label="Street" name="street" type="text" />
                    <Input label="City" name="city" type="text" />
                    <Select label="State" name="state" optionsType="state" />
                    <Input label="Zipcode" name="zipcode" type="number" />
                </div>
                <div className="px-2">
                    <Select
                        label="Department"
                        name="department"
                        optionsType="department"
                    />
                </div>
                <div className="flex justify-center p-5">
                    <button
                        className="text-white bg-green-900 p-2 opacity-80 rounded"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
