import './Modal.css';

function Modal({title, removeModal}) {
    return (
        <>
            <div className="modal">
                <p className="modal__title">{title}</p>
                <div className="modal__buttons">
                    {/* onClick={() => console.log('cancel')} */}
                    <button onClick={removeModal} className="btn btn__cancel">Cancel</button>
                    <button onClick={removeModal} className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    );
}

export default Modal