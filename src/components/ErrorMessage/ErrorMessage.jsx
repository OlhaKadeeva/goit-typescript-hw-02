import css from "./ErrorMessage.module.css";
import React from "react";

const ErrorMessage = ({ message }) => {
  return <p className={css.errorMessage}>{message}</p>;
};

export default ErrorMessage;
