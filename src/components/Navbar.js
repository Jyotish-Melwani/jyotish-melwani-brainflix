import React from 'react';
import logo from '../Assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../Assets/Icons/search.svg';
import upload from '../Assets/Icons/upload.svg';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__container'>
          <div className='navbar__logo-container'>
            <img className='header__logo' src={logo} alt='logo' />
          </div>
        </div>
        <div className='navbar__searchBar-container '>
        <div className='navbar__searchIcon-container'>
          <img className='navbar__searchIcon-container--icon' src={searchIcon} alt='Search Icon' />
          <h4 className='navbar__searchIcon-container--text'>Search</h4>
        </div>
        <div className='navbar__upload-container--image'></div>
        </div>
        <div className='navbar__upload-container'>
          <div className='navbar__upload-container-inner'>
            <img className='navbar__upload-container-inner--icon' src={upload} alt='Upload Icon' />
            <h4 className='navbar__upload-container-inner--text'>Upload</h4>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar