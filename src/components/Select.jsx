import { states } from './StateList';

export default function Select({
    label,
    name,
    optionsType,
    setElement,
    value,
}) {
    const handleChange = (e) => {
        setElement(e);
    };

    return (
        <>
            <div className="flex flex-col">
                <label htmlFor={name}>{label}</label>
                <select
                    name={name}
                    id={name}
                    className="h-8 border-2 border-green-900 border-opacity-70 rounded"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    {optionsType === 'state' ? (
                        <>
                            {states.map((state) => (
                                <option
                                    key={`state-${state.abbreviation}`}
                                    value={state.abbreviation}
                                >
                                    {state.name}
                                </option>
                            ))}
                        </>
                    ) : (
                        <>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Human Resources">
                                Human Resources
                            </option>
                            <option value="Legal">Legal</option>
                        </>
                    )}
                </select>
            </div>
        </>
    );
}
