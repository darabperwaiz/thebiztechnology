import PrimaryButton from "../../../Reusable/PrimaryButton";
import TrustedBrands from "../../../Reusable/TrustedBrands";
import style from "./testimonial.module.css";
import { TbAntennaBars5 } from "react-icons/tb";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryFullOutline } from "react-icons/io5";

const Testimonial = () => {
  return (
    <div className={style.testimonial}>
      <div className={style.left}>
        <p>Testimonial</p>
        <p>
          What <span>Clients</span> Say About Our Services
        </p>
      </div>
      <div className={style.mid}>
        <div className={style.outer}>
          <div className={style.inner}>
            <video className={style.clientVideo} src={require(`../../../assets/video/client_video.mp4`)} width="300px" height="900px" autoPlay={true} muted loop>
                {/* <source  type="video/mp4"/> */}
            </video>
            {/* <img
              className={style.female}
              src={require(`../../../assets/images/female.jpeg`)}
              alt=""
            /> */}
            <div className={style.dIsland}>
              <div className={style.notification}></div>
              <div className={style.camera}>
                <div className={style.cameraOuter}>
                  <div className={style.cameraInner}></div>
                </div>
              </div>
            </div>
            <div className={style.icons}>
              <TbAntennaBars5 />
              <IoIosWifi />
              <IoBatteryFullOutline />
            </div>
            <div className={style.clock}>
                9:41
            </div>
            <div className={style.navBar}></div>
            {/* <img className={style.play} src={require(`../../../assets/images/play.svg`).default} alt="" /> */}
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.rightTop}>
          <img
            className={style.quote}
            src={require(`../../../assets/images/quoteLeft.svg`).default}
            alt=""
          />
          <p>
            A versatile programming language used for creating interactive and
            dynamic content on websites, known for its widespread adoption and
            compatibility across different web browsers.A versatile programming
            language used for creating interactive and dynamic content on
            websites,{" "}
          </p>
          <div className={style.rightMid}>
            <img
              className={style.quote}
              src={require(`../../../assets/images/quoteRight.svg`).default}
              alt=""
            />
            <div className={style.midMid}>
              <div className={style.ceo}>
                <img
                  className={style.markImg}
                  src={require(`../../../assets/images/mark.jpeg`)}
                  alt="mark"
                />
                <div className={style.label}>
                  <p>Mark Brown</p>
                  <p>CEO - Reliable Trust</p>
                </div>
              </div>
              <img
                src={require(`../../../assets/images/google.svg`).default}
                alt=""
              />
            </div>
          </div>
        </div>
        <TrustedBrands />
        <PrimaryButton text={"View All reviews"} />
      </div>
    </div>
  );
};

export default Testimonial;
