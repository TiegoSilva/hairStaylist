import React from 'react';

import './styles.css'

import Header from '../../components/Header'

import BlondeHair from '../../assets/laistrotta-wide.png'
import BlondeHairReduced from '../../assets/laistrotta.png'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container-home">
        <h2 className="title">
          Venha para uma experiência incrível. <br /> 
          O desbotado brilhando e<br />
          As raízes mais fortes!<br />
        </h2>
        <img src={BlondeHair} alt="Cabelo loiro" className="mainImage"/>
        <img src={BlondeHairReduced} alt="Cabelo loiro" className="mobileImage"/>
      </div>
    </div>
  );
}
