import React from "react";
import style from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className="container">
        <div>
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
                  <FaInstagram
                    style={{
                      background:
                        "linear-gradient(270deg, #FFB147 5.74%, #FF6C63 50.64%, #B86ADF 92.05%)",
                      borderRadius: "3px",
                      WebkitTextFillColor: 'transparent'
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
              <div className={style.addressWrapper}>
                <div className={style.address}>
                  <p>USA</p>
                  <div className={style.location}>
                    <p><MdOutlineLocationOn style={{color: '#5840FF', fontSize: '16px'}}/> 27 Division St, New York, NY</p>
                    <p><BsTelephone style={{color: '#5840FF', fontSize: '16px'}}/> +1(190) 122-8293</p>
                  </div>
                </div>
                <div className={style.address}>
                  <p>India</p>
                  <div className={style.location}>
                    <p><MdOutlineLocationOn style={{color: '#5840FF', fontSize: '16px'}} /> 27 Division St, New York, NY</p>
                    <p><BsTelephone style={{color: '#5840FF', fontSize: '16px'}}/> +1(190) 122-8293</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.pGetway}>
              <img src={require(`../../assets/images/pGatewayIcons/paypal.svg`).default} alt="" />
              <img src={require(`../../assets/images/pGatewayIcons/stripe.svg`).default} alt="" />
              <img src={require(`../../assets/images/pGatewayIcons/visa.svg`).default} alt="" />
              <img src={require(`../../assets/images/pGatewayIcons/mastercard.svg`).default} alt="" />
            </div>
          </div>
        </div>
        <div className={style.copyright}>
          <span>&#169;</span>Copyright TheBiztechnology. All right reserved
        </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
