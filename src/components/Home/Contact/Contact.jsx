import React from "react";
import style from "./contact.module.css";
import { Button } from "../../../Reusable/Button";
import { Link } from "react-router-dom";
import { LuMail } from "react-icons/lu";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.left}>
        <div className={style.topLeft}>
          <p className={style.head}>Contact Us</p>
          <p className={style.title}>
            Ready To Take Your <span>Next Step?</span>
          </p>
        </div>
        <p className={style.des}>
          Let me know your digitally need for your business and <span>we will contact
          you within 6 hr.</span>
        </p>
        <div className={style.midLeft}>
          <div className={style.rating}>
            <p>95%</p>
            <p>Client Recurring Rate</p>
          </div>
          <div className={style.rating}>
            <p>452</p>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className={style.botLeft}>
          <Link className={style.link} to="mailto:info@thebiztechnology.com">
            <LuMail style={{ color: "orange" }} />{" "}
            <span>info@thebiztechnology.com</span>
          </Link>
          <Button text={"Get A Proposal"} />
        </div>
      </div>
      <div className={style.right}>Contact Form....... Coming Soon!</div>
    </div>
  );
};

export default Contact;
