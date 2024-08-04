import React, { useState } from 'react';
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        <div className="gpt3_navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar_links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3_navbar_menu">
        {ToggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {ToggleMenu && (
          <div className="gpt3_navbar_menu_container scale-up-center">
            <div className="gpt3_navbar_menu_container_links">
              <Menu />
              <div className="gpt3_navbar_menu_container_links_sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
