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
                        <a href="https://www.linkedin.com/in/daniel-k-5555a28a/" title="LinkedIn" class="icon-cog"><FaLinkedin /></a>
                    </li>
                    <li className="ms-3 icon">
                        <a href="https://github.com/yoojeenkim" title="GitHub" class="icon-cog"><FaGithub /></a>
                    </li>
                    <li className="ms-3 icon">
                        <a href="https://www.reddit.com/user/daniel-eugene-k" title="Reddit" class="icon-cog"><FaReddit /></a>
                    </li>
                    <li className="ms-3 icon">
                        <a href="https://twitter.com/DanielEugeneK" title="Twitter" class="icon-cog"><FaTwitter /></a>
                    </li>
                    <li className="ms-3 icon">
                        <a href="https://stackoverflow.com/users/17164136/daniel-kim?tab=profile" title="Stack OverFlow" class="icon-cog"><FaStackOverflow /></a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;