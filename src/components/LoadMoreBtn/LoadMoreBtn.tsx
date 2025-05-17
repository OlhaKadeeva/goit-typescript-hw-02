import css from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.load} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
