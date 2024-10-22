import PrimaryButton from "../../../Reusable/PrimaryButton"
import style from './banner2.module.css'

const Banner2 = () => {
    return (
        <div className={style.banner2}>
            <div className={style.gradient}>
            <div className={style.left}>
                <p className={style.title}>Enhance your business with the most advanced technological solutions available.</p>
                <p className={style.des}>8+ years of building digital products and we are just getting started</p>
                <PrimaryButton text="Let's talk with me"/>
            </div>
            <div className={style.right}>
                <img className={style.halfCircle} src={require(`../../../assets/images/halfCircle.svg`).default} alt="" />
                <div className={style.imgBox}>
                    <img src={require(`../../../assets/images/man.png`)} alt="" />
                </div>
                <img className={style.google} src={require(`../../../assets/images/g.svg`).default} alt="" />
                <img className={style.slack} src={require(`../../../assets/images/slack.svg`).default} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Banner2