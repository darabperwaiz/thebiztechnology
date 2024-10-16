import React from "react";
import style from './brandicons.module.css'

const BrandIcons = () => {
  return (
    <div className={style.brands}>
      <div className={style.brandIcons}>
        <img src={require('../../../assets/images/brandIcons/logos_shopify.svg').default} alt="" />
        <img src={require('../../../assets/images/brandIcons/wordpress.svg').default} alt="" />
        <img src={require('../../../assets/images/brandIcons/logos_weebly.svg').default} alt="" />
        <img src={require('../../../assets/images/brandIcons/logos_php.svg').default} alt="" />
        <img src={require('../../../assets/images/brandIcons/devicon_javascript.svg').default} alt="" />
      </div>
      <div className={style.brandIcons}>
      <img src={require('../../../assets/images/brandIcons/logos_css-3.svg').default} alt="" />
        <img src={require('../../../assets/images/brandIcons/logos_html-5.svg').default} alt="" />
        <img src={require('../../../assets/images/brandIcons/devicon_woocommerce-wordmark.svg').default} alt="" />
        <img src={require('../../../assets/images/brandIcons/bxl_wix.svg').default} alt="" />
        <img src={require('../../../assets/images/brandIcons/Vector.svg').default} alt="" />
      </div>
    </div>
  );
};

export default BrandIcons;
