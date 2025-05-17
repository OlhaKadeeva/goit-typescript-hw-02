import ImageCard from "../ImageCard/ImageCard";
import React from "react";
import css from "./ImageGallery.module.css";
import { UnsplashImage } from "../../App.types";

interface Props {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((img) => (
        <li className={css.card} key={img.id}>
          <ImageCard image={img} onClick={() => onImageClick(img)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
