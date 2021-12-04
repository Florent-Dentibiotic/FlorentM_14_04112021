export default function Input({ label, name, type, setElement, value, max }) {
    return (
        <>
            <div className="flex flex-col">
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="h-8 border-2 border-green-900 border-opacity-70 rounded pl-2"
                    value={value}
                    onChange={(e) => setElement(e.target.value)}
                    max={max}
                ></input>
            </div>
        </>
    );
}
