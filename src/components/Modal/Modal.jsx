import './Modal.css';

const Modal = ({ image: { largeImageURL, tags }, onClose }) => {
    return (
        <div className="Overlay" onClick={() => onClose()}>
            <div className="Modal">
                <img src={largeImageURL} alt={tags} />
            </div>
        </div>
    )
}

export default Modal;