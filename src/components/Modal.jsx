export default function Modal({
    setModal,
    modalStyle,
    content,
    contentStyle,
    buttonStyle,
}) {
    const handleClick = () => {
        setModal(false);
    };

    return (
        <>
            <div
                className="z-10 absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50"
                onClick={handleClick}
            >
                <div className={modalStyle}>
                    <p className={contentStyle}>{content}</p>
                    <button className={buttonStyle} onClick={handleClick}>
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}
