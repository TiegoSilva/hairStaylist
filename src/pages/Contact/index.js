import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header'
import Cta from './../../assets/cta-button.png';


export default function Contact() {
  return (
    <div>
      <Header />
      <div className="container-contact">
        <div className="title">
            <h2>Contatos</h2>
        </div>
        <div className="textContact">
            <h3>
                Você pode agendar um horário através do nosso <br /> WhatsApp.
            </h3>
        </div>
        <div className="icons">
            <a href="https://api.whatsapp.com/send?phone=555521973243002&text=Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" >
              <img src={Cta} alt="call to action"/>
            </a>&nbsp;&nbsp;
        </div>

        <div className="addressText">
          <h6>Rua Araguaia,  1055 - Freguesia, Jacarepaguá - RJ, 22745-270, Brasil</h6>
        </div>
      </div>
    </div>
  );
}
