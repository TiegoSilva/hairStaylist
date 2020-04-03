import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './styles.css';
import Logo from './../../assets/logo.png'
import { Menu } from 'react-feather';

export default function Header() {
  const [openedMenu, setMenu] = useState(false)

  async function openMenu(){
    const mobileMenu = document.getElementById("mobileMenu");
    if(!openedMenu){
      setMenu(true)
      mobileMenu.style.top = await "0px";
    }else{
      setMenu(false)
      mobileMenu.style.top = await "-800px";
    }
  }
  return (
    <>
      <div className="menu-mobile-button" onClick={openMenu}>
        <Menu size={30} color="#808080"/>
      </div>
      <div className="menu-mobile" id="mobileMenu">
        <ul>
          <Link to="/"><li>Início</li></Link>
          <Link to="/servicos"><li>Serviços</li></Link>
          <Link to="/contato"><li>Contatos</li></Link>
        </ul>
      </div>
      <header className="header">
          <div className="container">
              <img src={Logo} className="logo" alt="Logo SIOL Concept"/>
              <ul className="menu">
                <Link to="/"><li>Início</li></Link>
                <Link to="/servicos"><li>Serviços</li></Link>
                <Link to="/contato"><li>Contatos</li></Link>
              </ul>
          </div>
      </header>
    </>
  );
}
