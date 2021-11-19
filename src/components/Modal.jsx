export default function Modal({ setModal }) {
    const handleClick = () => {
        setModal(false);
    };

    return (
        <>
            <div className="z-10 absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
                <div className="p-9 border-4 flex flex-col justify-center items-center border-green-900 border-opacity-70 bg-white rounded overflow-hidden bg-scroll">
                    <p className="m-5">Employee Created!</p>
                    <button
                        className="text-white w-24 bg-green-900 p-2 opacity-80 hover:opacity-100 rounded px-5"
                        onClick={handleClick}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}
