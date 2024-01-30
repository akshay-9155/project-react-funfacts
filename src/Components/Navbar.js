import React from 'react'
import reactLogo from '../Images/logo.svg';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navPart1">
                <img src={reactLogo} alt="React Logo" />
                <h1>ReactFacts</h1>
            </div>
            <div className="navPart2">
                <div className="phone">
                    <h3>React Course</h3>
                    <h3>Project 1</h3>
                </div>
                <h3>React Course - Project 1</h3>
            </div>
        </div>
    )
}

export default Navbar