import React from 'react';

import './styles.css'

import Header from '../../components/Header'

import Manicure from '../../assets/service-manicure.png'
import Mecha from '../../assets/service-mechas.png'
import Sombrancelha from '../../assets/service-sombrancelha.png'

export default function Services() {
  return (
    <div>
      <Header />
      <div className="container-services">
        <div className="title">
            <h2>Serviços</h2>
        </div>

        <div className="services">
            <div className="service">
                <img src={Mecha} alt="Serviço de confecção mechas" />
                <div>
                    <h4>Mechas</h4>
                </div> 
            </div>
            
            <div className="service">
                <img src={Manicure} alt="Serviço de manicure"/> 
                <div>
                    <h4>Manicure</h4>
                </div>
            </div>

            <div className="service">
                <img src={Sombrancelha} alt="Serviço de design de sombrancelhas"  /> 
                <div>
                    <h4>Designer de <br />sombrancelha</h4>
                </div>
            </div>
        </div>

        <div className="final-text">
            <h3>
                 Prontas para deixar seu cabelo fantástico, <br />
                suas unhas impecáveis e suas sombrancelhas magníficas, <br />
                a SIOL CONCEPT vai mudar seu visual.
            </h3>
        </div>

      </div>
    </div>
  );
}
