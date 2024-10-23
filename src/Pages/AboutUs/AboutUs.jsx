import React from "react";
import style from "./aboutus.module.css";
import TrustedBrands from "../../Reusable/TrustedBrands";
import PrimaryButton from "../../Reusable/PrimaryButton";
import Contact from "../../components/Home/Contact/Contact";
import Ceo from "../../components/Home/CEO/Ceo";
import { FaCloudUploadAlt, FaLock } from "react-icons/fa";
import { FaHardDrive } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
      <div className={style.aboutHero}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.head}>
              <p className={style.title}>
                welcome to <span>the biz technology</span> company
              </p>
              <p className={style.des}>
                your trusted partner for internet marketing and website
                services. Specializing in delivering tailored solutions, we
                empower businesses to enhance their online presence and drive
                growth
              </p>
            </div>
            <TrustedBrands />
            <PrimaryButton text={"Let's talk with me"} />
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className={style.top}>
            <div className={style.topLeft}>
              <p className={style.topLefttitle}>
                The design subscription that <span>connects</span> you
              </p>
              <p className={style.topLeftdes}>
                Our SEO services are designed to elevate your online presence
                and drive tangible results. We begin with a comprehensive
                analysis, identifying opportunities for improvement and
                tailoring a strategy to align with your business goals. Through
                meticulous keyword research and on-page optimization, we ensure
                your content ranks high on search engines, attracting the right
                audience.
              </p>
            </div>
            <div className={style.topRight}>
              <div className={style.topRightLeft}>
                <div className={style.imageWrapper}>
                  <img
                    src={require(`../../assets/images/five_images/girl_working.png`)}
                    alt="girl_working"
                  />
                </div>
                <div className={style.imageWrapper}>
                  <img
                    src={require(`../../assets/images/five_images/man_working.jpeg`)}
                    alt="man working"
                  />
                </div>
              </div>
              <div className={style.topRightMid}>
                <div className={style.imageWrapper}>
                  <img
                    src={require(`../../assets/images/five_images/holding_tab.jpeg`)}
                    alt="man with tab"
                  />
                </div>
                <div className={style.imageWrapper}>
                  <img
                    src={require(`../../assets/images/five_images/siting_on_couch.png`)}
                    alt="girl sitting on couch"
                  />
                </div>
              </div>
              <div className={style.topRightRight}>
                <div className={style.imageWrapper}>
                  <img
                    src={require(`../../assets/images/five_images/teaching_on_whiteboard.png`)}
                    alt="presenting ideas on whiteboard"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.mid}>
            <div className={style.midLeft}>
              <img
                src={require(`../../assets/images/group_of_people.jpeg`)}
                alt="group_of_people"
              />
            </div>
            <div className={style.midRight}>
              <p className={style.midRightTitle}>
                The design <span>subscription</span> thats connects you.
              </p>
              <p className={style.midRightDes}>
                Our SEO services are designed to elevate your online presence
                and drive tangible results. We begin with a comprehensive
                analysis, identifying opportunities for improvement and
                tailoring a strategy to align with your business goals. Through
                meticulous keyword research and on-page optimization, we ensure
                your content ranks high on search engines, attracting the right
                audience.
              </p>
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.bottomLeft}>
              <p className={style.bottomTitle}>
                The design <span>subscription</span> that connects you.
              </p>
            </div>
            <div className={style.bottomRight}>
              <div className={style.bottomRightBox}>
                <FaCloudUploadAlt style={{color: 'var(--secondry-button-color)',marginTop: '6px', minWidth: '20px'}}/>
                <p  className={style.bottomRightBoxTitle}>
                  <span>Push to deploy.</span> Lorem ipsum, dolor sit amet
                  consectetur adipisicingelit. Maiores impedit perferendis
                  suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
              </div>
              <div className={style.bottomRightBox}>
              <FaLock style={{color: 'var(--secondry-button-color)',marginTop: '6px', minWidth: '20px'}}/>
                <p className={style.bottomRightBoxTitle}>
                  <span>SSL certificates.</span> Lorem ipsum, dolor sit amet
                  consectetur adipisicingelit. 
                </p>
              </div>
              <div className={style.bottomRightBox}>
                <FaHardDrive style={{color: 'var(--secondry-button-color)',marginTop: '6px', minWidth: '20px'}}/>
                <p className={style.bottomRightBoxTitle}>
                  <span>Database backups.</span> Lorem ipsum, dolor sit amet
                  consectetur adipisicingelit. 
                </p>
              </div>
              <div className={style.bottomRightBox}>
                <FaHardDrive style={{color: 'var(--secondry-button-color)',marginTop: '6px', minWidth: '20px'}}/>
                <p className={style.bottomRightBoxTitle}>
                  <span>Database backups.</span> Lorem ipsum, dolor sit amet
                  consectetur adipisicingelit. 
                </p>
              </div>
              <div className={style.bottomRightBox}>
                <FaHardDrive style={{color: 'var(--secondry-button-color)',marginTop: '6px', minWidth: '20px'}}/>
                <p className={style.bottomRightBoxTitle}>
                  <span>Database backups.</span> Lorem ipsum, dolor sit amet
                  consectetur adipisicingelit. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className={style.mt}>
      <div className="container">
        <Contact />
        <Ceo />
      </div>
      </section>
    </>
  );
};

export default AboutUs;
