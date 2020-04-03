import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import { MessageCircle, Mail } from 'react-feather';

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
                Você pode agendar um horário através do nosso <br /> WhatsApp ou do nosso Instagram.
            </h3>
        </div>
        <div className="icons">
            <MessageCircle size='50' color="#808080" />&nbsp;&nbsp;
            <Mail size='50' color="#808080" />
        </div>
      </div>
    </div>
  );
}
