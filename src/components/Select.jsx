export default function Select({ label, name, options, setElement, value }) {
    return (
        <>
            <div className="flex flex-col">
                <label htmlFor={name}>{label}</label>
                <select
                    name={name}
                    id={name}
                    className="h-8 border-2 border-green-900 border-opacity-70 rounded"
                    value={value}
                    onChange={(e) => setElement(e.target.value)}
                >
                    {options.map((element) => (
                        <option
                            key={`element-${element.abbreviation}`}
                            value={element.abbreviation}
                        >
                            {element.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
