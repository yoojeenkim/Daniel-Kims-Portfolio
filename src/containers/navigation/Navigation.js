import React from 'react';
import '../navigation/Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a href="#home" onClick={() => handlePageChange('Landing')} className={currentPage === 'Landing' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li className="nav-item">
                <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
        </ul>
    )
}
export default Navigation;