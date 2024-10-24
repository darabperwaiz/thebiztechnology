import React from "react";
import style from "./contactus.module.css";
import { LearnMoreBtn } from "../../Reusable/LearnMoreBtn";
import { LuPhoneCall, LuMap, LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaAngleRight, FaArrowRight} from "react-icons/fa6";
import Ceo from "../../components/Home/CEO/Ceo";

const ContactUs = () => {
  return (
    <>
      <section className={style.aboutus}>
        <div className="container">
          <div className={style.top}>
            <div className={style.topTop}>
              <p>Contact Us</p>
              <p>
                Want to Get in <span>Touch?</span>
              </p>
            </div>
            <p>
            We love hearing from other people, whether they're our users or just curious about what we do. If you have any questions about our product or want to give us feedback (good or bad), don't hesitate to get in touch.
            </p>
          </div>
          <div className={style.mid}>
            <div className={style.midLeft}>
                <p>Let's Join Forces to Create <span>unique</span> experiences.</p>
                <p>THUS YOUR BRAND WILL TRANSFORM FROM BLAND TO <span>BUZZWORTHY.</span><br />Our all ears and mind are here for you.</p>
                <div className={style.address}>
                    <div className={style.addressWrapper}>
                        <p><span><LuPhoneCall /></span><span>+91 9501041005</span></p>
                        <p><span><LuMail /></span><span>hello@alphamw.com</span></p>
                        <p><span><LuMap /></span><span>Plot No. 29 Sector 82 <br />JLPL Ind Zone, Mohali<br />Punjab 160055 IND.</span></p>
                    </div>
                    <LearnMoreBtn text={'Careers'}  color={'orange'}/>
                </div>
            </div>
            <div className={style.midRight}>
                <input className="" type="text" placeholder="Full Name *"/>
                <input type="text" placeholder="Email Address *"/>
                <input type="text" placeholder="Company Name *"/>
                <textarea name="" id="" placeholder="How can we help you?"></textarea>
                <button>Explore Our Agency <FaAngleRight /></button>
            </div>
          </div>
          <div className={style.bottom}>
            Map....... Coming Soon!
          </div>
          <div className={style.last}>
            <div className={style.FeedBack}>
              <p>Send us Product Feedback</p>
              <p>As a user of AMW, you can send us product feedback in Canny. You can also see which new features people are requesting and what we are currently working on.</p>
              <Link to="#">Send Feedback <FaArrowRight /> </Link>
            </div>
            <div className={style.FeedBack}>
              <p>Send us Product Feedback</p>
              <p>As a user of AMW, you can send us product feedback in Canny. You can also see which new features people are requesting and what we are currently working on.</p>
              <Link to="#">Send Feedback <FaArrowRight /> </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.slider}>
          <img src={require(`../../assets/images/slide_images/image_slide_001.jpg`)} alt="" />
          <img src={require(`../../assets/images/slide_images/image_slide_002.jpg`)} alt="" />
          <img src={require(`../../assets/images/slide_images/image_slide_004.jpg`)} alt="" />
          <img src={require(`../../assets/images/slide_images/image_slide_003.jpg`)} alt="" />
          <img src={require(`../../assets/images/slide_images/image_slide_001.jpg`)} alt="" />
          <img src={require(`../../assets/images/slide_images/image_slide_004.jpg`)} alt="" />
          <img src={require(`../../assets/images/slide_images/image_slide_002.jpg`)} alt="" />
          <img src={require(`../../assets/images/slide_images/image_slide_003.jpg`)} alt="" />
        </div>
      </section>
      <section className={style.mt}>
        <div className="container">
          <Ceo />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
