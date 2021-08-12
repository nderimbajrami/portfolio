import React from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-orange " id="nav">
            <div className="container">
                
                <a className="navbar-brand" href="#">
                    <img className="logo" src={logo} alt="logo..."></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#nav">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nav">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nav">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nav">work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nav">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nav">contact</a>
                        </li>
                    </ul>
                </div>
            </div>  
        </nav>
    )
}

export default Navbar
