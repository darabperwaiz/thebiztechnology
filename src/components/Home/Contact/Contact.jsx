import React from "react";
import style from "./contact.module.css";
import { Button } from "../../../Reusable/Button";
import { Link } from "react-router-dom";
import { LuMail } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6"

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
          Let me know your digitally need for your business and{" "}
          <span>we will contact you within 6 hr.</span>
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
      <div className={style.right}>
        <div className={style.rightTop}>
          <p>More About you</p>
          <p>Fill out the contact form and we'll get in touch with you shortly.</p>
        </div>
        <form action="" className="scheduleForm">
          <input className={style.input} type="text" placeholder="Your Name"/>
          <input className={style.input} type="text" placeholder="Your Phone"/>
          <select className={style.input} name="services" id="">
            <option value="" selected disabled hidden>Select A Services</option>
            <option value="seo">SEO</option>
            <option value="smo">SMO</option>
            <option value="gmb">GMB</option>
            <option value="crm">CRM</option>
            <option value="app development">App Development</option>
            <option value="website development">Website Development</option>
            <option value="link building">Link Building</option>
            <option value="content writing">Content Writing</option>
            <option value="sales funnel fixing">Sales Funnel Fixing</option>
            <option value="website annual maintenance">Website Annual Maintenance</option>
          </select>
          <textarea className={style.input} name="" id="" placeholder="Your messages"></textarea>
        </form>
        <button className={style.button}>Schedule Now <span><FaArrowRightLong /></span></button>
      </div>
    </div>
  );
};

export default Contact;
