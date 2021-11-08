import { useState } from 'react';

export default function Input({ label, name, type }) {
    const [inputValue, setValue] = useState();

    const handleChange = (e) => {
        setValue(e);
    };

    return (
        <>
            <div className="flex flex-col">
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    required
                    className="h-8 border-2 border-green-900 border-opacity-70 rounded pl-2"
                    value={inputValue}
                    onChange={(e) => handleChange(e.target.value)}
                ></input>
            </div>
        </>
    );
}
