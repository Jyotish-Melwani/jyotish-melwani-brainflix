import React from 'react';
import logo from '../Assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../Assets/Icons/search.svg';
import upload from '../Assets/Icons/upload.svg';

function Navbar() {
  return (
    <nav className="navbar">
    <img className="navbar__logo" src = {logo} alt ="brainflix logo"></img>
    <form className="navbar__form">
            <div className="navbar__container">
            <input className="navbar__search" type ="search"  placeholder = "Search"></input>
            <img className="navbar__searchImage" src = {searchIcon} alt ="Search icon"></img>
            <div className="navbar__avatar"></div>
            </div>
            
            <div className="navbar__form-upload">
            <button className="navbar__button"type = "submit" ><img className="navbar__uploadImage" src = {upload} alt ="Search icon"></img>UPLOAD</button>
            <div className="navbar__avatar-tablet"></div>
        </div>
    </form>
  </nav>
  )}

export default Navbar