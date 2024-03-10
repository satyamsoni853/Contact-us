import React from "react";
import { MdOutlineMessage } from "react-icons/md";

import styles from "./Form.module.css";
import Button from "../Button/Button";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
// import Image from './componet/images/Frame.png'
import Image_01 from '../images/Frame.png'

const Formm = () => {
  return (
    <div className={styles.Form}>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CALL"
              icon={<MdOutlineMessage />}
            ></Button>
            <Button text="VIA  CALL" icon={<IoCall />}></Button>
            <Button
              text="VIA  Email Form"
              isOutline={true}
              icon={<IoIosMail />}
            ></Button>
          </div>
          <form>
          <div className={styles.form_controler}>
          <label htmlFor="name">NAME</label>
          <input type="text" name="name" id="" />
          </div>
        </form>
        <form>
          <div className={styles.form_controler}>
          <label htmlFor="name">Email</label>
          <input type="text" name="name" id="" />
          </div>
        </form>
        <form>
          <div className={styles.form_controler}>
          <label htmlFor="name">Text</label>
          <input type="text" name="name" id="" />
          </div>
          
        </form>
        

        </div>
        <div className={styles.contact_Image}>
          <img src={Image_01} alt="" />


        </div>

        
      </section>
      
    </div>
    
    
  );
};

export default Formm;
