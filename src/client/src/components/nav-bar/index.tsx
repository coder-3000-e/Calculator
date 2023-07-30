import { NavLink } from "react-router-dom";

import "./styles.css";
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Menu } from '../../assets/icons/menu.svg'
import { useState } from "react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <Logo style={{width: '6vh', height: 'auto'}}/>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Menu />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li onClick={handleShowNavbar}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li onClick={handleShowNavbar}>
                            <NavLink to="/calculator">Calculator</NavLink>
                        </li>
                        <li onClick={handleShowNavbar}>
                            <NavLink to="/about" >About</NavLink>
                        </li>
                        <li onClick={handleShowNavbar}>
                            <NavLink to="/contact" >Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
