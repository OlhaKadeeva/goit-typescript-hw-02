import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.75)";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    backgroundColor: "rgba(53, 52, 52, 0.6)",
    border: "none",
  },
};

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <button className={css.close} onClick={onClose}>
        ✖️
      </button>
      <img
        className={css.img}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </ReactModal>
  );
};

export default ImageModal;
