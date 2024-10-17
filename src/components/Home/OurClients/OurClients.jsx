import React from 'react'
import style from './ourclients.module.css'

const OurClients = () => {
  return (
    <div className={style.ourClients}>
      <p className={style.title}>Our <span>Clients</span></p>
      <div className={style.icons}>
        <div className={style.icon}>
            <img src={require(`../../../assets/images/clientsIcon/Eileen-Rouse-Logo.png`)} alt="" />
        </div>
        <div className={style.icon}>
            <img src={require(`../../../assets/images/clientsIcon/phlebo.co_ 1.png`)} alt="" />
        </div>
        <div className={style.icon}>
            <img src={require(`../../../assets/images/clientsIcon/logo-e16710445489801.png`)} alt="" />
        </div>
        <div className={style.icon}>
            <img src={require(`../../../assets/images/clientsIcon/qtq_95 1.png`)} alt="" />
        </div>
        <div className={style.icon}>
            <img src={require(`../../../assets/images/clientsIcon/Printable-file_edited 1.png`)} alt="" />
        </div>
        <div className={style.icon}>
            <img src={require(`../../../assets/images/clientsIcon/glamour.png`)} alt="" />
        </div>
        <div className={style.icon}>
            <img src={require(`../../../assets/images/clientsIcon/yogshala.png`)} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OurClients
