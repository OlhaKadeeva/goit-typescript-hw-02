import css from "./ErrorMessage.module.css";
import React from "react";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={css.errorMessage}>{message}</p>;
};

export default ErrorMessage;
