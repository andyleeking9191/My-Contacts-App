import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles[props.className]} onClick={props.onClick}>
      {props.buttonName}
    </button>
  );
};

export default Button;
