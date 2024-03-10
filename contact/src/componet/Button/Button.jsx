import { MdOutlineMessage } from "react-icons/md";
import React from "react";
import styles from "./Button.module.css";
// import { MdCall } from "react-icons/md";
import { IoCall } from "react-icons/io5"

function Button(props) {
  return (
    <div>
      <button className={props.isOutline ? styles.ouline_btn : styles.primary_btn}>
        
        {props.text}
        {props.icon}
      </button>
      
    </div>
  );
}

export default Button;
