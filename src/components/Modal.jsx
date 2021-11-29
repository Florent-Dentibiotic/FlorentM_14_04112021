export default function Modal({
    backgroundAction,
    modalStyle,
    content,
    contentStyle,
    buttonStyle,
    buttonAction,
}) {
    return (
        <>
            <div
                className="z-10 absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50"
                onClick={backgroundAction}
            >
                <div className={modalStyle}>
                    <p className={contentStyle}>{content}</p>
                    <button className={buttonStyle} onClick={buttonAction}>
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}
