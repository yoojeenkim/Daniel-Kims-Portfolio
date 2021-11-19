import React from 'react';
import { FaLinkedin, FaGithub, FaReddit, FaTwitter, FaStackOverflow } from 'react-icons/fa';

const iconStyle = {
    fontSize: '80px'
};

const iconCogStyle = {
    color: 'black'
};

function Footer () {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
                <div className="d-flex align-items-center"></div>
                <ul className="nav justify-content-center d-flex">
                    <li className="ms-3 icon" style={iconStyle}>
                        <a href="https://www.linkedin.com/in/daniel-k-5555a28a/" title="LinkedIn" style={iconCogStyle}><FaLinkedin /></a>
                    </li>
                    <li className="ms-3 icon" style={iconStyle}>
                        <a href="https://github.com/yoojeenkim" title="GitHub" style={iconCogStyle}><FaGithub /></a>
                    </li>
                    <li className="ms-3 icon" style={iconStyle}>
                        <a href="https://www.reddit.com/user/daniel-eugene-k" title="Reddit" style={iconCogStyle}><FaReddit /></a>
                    </li>
                    <li className="ms-3 icon" style={iconStyle}>
                        <a href="https://twitter.com/DanielEugeneK" title="Twitter" style={iconCogStyle}><FaTwitter /></a>
                    </li>
                    <li className="ms-3 icon" style={iconStyle}>
                        <a href="https://stackoverflow.com/users/17164136/daniel-kim?tab=profile" title="Stack OverFlow" style={iconCogStyle}><FaStackOverflow /></a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;