import React from 'react';
import { FaLinkedin, FaGithub, FaReddit, FaTwitter, FaStackOverflow } from 'react-icons/fa';
import '../footer/Footer.css';

function Footer () {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
                <div className="d-flex align-items-center"></div>
                <ul className="nav justify-content-center d-flex">
                    <li className="ms-3 icon">
                        <FaLinkedin />
                    </li>
                    <li className="ms-3 icon">
                        <FaGithub />
                    </li>
                    <li className="ms-3 icon">
                        <FaReddit />
                    </li>
                    <li className="ms-3 icon">
                        <FaTwitter />
                    </li>
                    <li className="ms-3 icon">
                        <FaStackOverflow />
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;