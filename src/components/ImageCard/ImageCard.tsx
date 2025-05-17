import css from "./ImageCard.module.css";
import React from "react";

type Image = {
  urls: {
    small: string;
  };
  alt_description: string;
};

type ImageCardProps = {
  image: Image;
  onClick: () => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
