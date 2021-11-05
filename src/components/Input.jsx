export default function Input({ label, name, type }) {
    return (
        <>
            <div className="flex flex-col">
                <label for={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    required
                    className="h-8 border-2 border-green-900 border-opacity-70 rounded pl-2"
                ></input>
            </div>
        </>
    );
}
