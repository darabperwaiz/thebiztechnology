import React from "react";
import style from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className="container">
        <div className={style.footerWrapper}>
          <div className={style.left}>
            <div className={style.logo}>
              <img src={require(`../../assets/images/logo.png`)} alt="" />
            </div>
            <p className={style.paragraph}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
            <div className={style.socialIcons}>
              <div className={style.icon}>
                <FaFacebookF style={{ color: "#4285F4" }} />
              </div>
              <div className={style.icon}>
                <FaTwitter style={{ color: "#229BF2" }} />
              </div>
              <div className={style.icon}>
                <div className={style.insta}>
                  <FaSquareInstagram
                    style={{
                      background:
                        "linear-gradient(270deg, #FFB147 5.74%, #FF6C63 50.64%, #B86ADF 92.05%)",
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </div>
              <div className={style.icon}>
                <FaYoutube style={{ color: "#D80027" }} />
              </div>
            </div>
          </div>
          <div className={style.quickLinks}>
            <p>Quick Links</p>
            <div className={style.links}>
              <Link to="#">Site Map</Link>
              <Link to="#">Terms and conditions</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Refund Policy</Link>
              <Link to="#">FAQ</Link>
              <Link to="#">Portfolio</Link>
            </div>
          </div>
          <div className={style.quickLinks}>
            <p>Hire Dedicated Expert</p>
            <div className={style.links}>
              <Link to="#">Sr. Website dev manager</Link>
              <Link to="#">Sr. Graphic Designer</Link>
              <Link to="#">Sr. Digital Marketing Manager</Link>
            </div>
          </div>
          <div className={style.quickLinks}>
            <p>Our Offices</p>
            <div className={style.links}>
              <Link to="#">Site Map</Link>
              <Link to="#">Terms and conditions</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Refund Policy</Link>
              <Link to="#">FAQ</Link>
              <Link to="#">Portfolio</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
