import React from "react";
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
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

interface ImageType {
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  image: ImageType | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
  if (!image || !isOpen) return null;

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
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
