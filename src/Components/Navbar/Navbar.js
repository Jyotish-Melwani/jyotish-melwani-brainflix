import logo from '../../Assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../../Assets/Icons/search.svg';
import upload from '../../Assets/Icons/upload.svg';
import { Link } from 'react-router-dom'
import "./Navbar.scss"

function Navbar({ defaultPrevent }) {
  return (
    <nav className="navbar">
    <Link to="/"><img className="navbar__logo" src = {logo} alt ="brainflix logo"></img></Link>
    <form className="navbar__form" onSubmit={defaultPrevent}>
            <div className="navbar__container">
            <input className="navbar__search" type ="search"  placeholder = "Search"></input>
            <img className="navbar__searchImage" src = {searchIcon} alt ="Search icon"></img>
            <div className="navbar__avatar"></div>
            </div>
            
            <div className="navbar__form-upload">
            <Link to="/upload" className="navbar__button"type = "submit" ><img className="navbar__button--uploadImage" src = {upload} alt ="Search icon"></img>UPLOAD</Link>
            <div className="navbar__avatar-tablet"></div>
        </div>
    </form>
  </nav>
  )}

export default Navbar