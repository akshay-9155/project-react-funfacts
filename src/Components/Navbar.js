import React from 'react'
import reactLogo from '../Images/logo.svg';
const Navbar = (props) => {
    return (
        <div className={`navbar ${props.darkMode ? "dark" : ""}`}>
            <div className="navPart1">
                <img src={reactLogo} alt="React Logo" />
                <h1>ReactFacts</h1>
            </div>
            <div className="navPart2">
                <p className={`toggle-light`}>Light</p>
                <div className={`toggle-bar`} onClick={props.handleToggle}>
                    <div className="toggle-circle"></div>
                </div>
                <p className={`toggle-dark`}>Dark</p>
            </div>
        </div>
    )
}

export default Navbar