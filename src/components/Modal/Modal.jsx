import './modal.css';

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
            <div className="custom__modal" onClick={backgroundAction}>
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
