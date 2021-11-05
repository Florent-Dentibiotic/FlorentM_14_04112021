export default function From() {
    return (
        <>
            <form className="p-2 flex flex-wrap justify-between">
                <div className="flex flex-col">
                    <label for="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="border-2 border-green-900 border-opacity-70 rounded"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label for="Birthdate">Date of Birth</label>
                    <input
                        type="date"
                        name="Birthdate"
                        id="Birthdate"
                        className="border-2 border-green-900 border-opacity-70 rounded"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label for="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="border-2 border-green-900 border-opacity-70 rounded"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label for="Startdate">Start Date</label>
                    <input
                        type="date"
                        name="Startdate"
                        id="Startdate"
                        className="border-2 border-green-900 border-opacity-70 rounded"
                    ></input>
                </div>
            </form>
        </>
    );
}
