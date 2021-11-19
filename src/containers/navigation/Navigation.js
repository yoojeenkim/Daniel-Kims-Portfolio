import React from 'react';

const navStyle = {
    color: 'black',
};

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a href="#home" style={navStyle} onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href="#about" style={navStyle} onClick={() => handlePageChange('Portfolio')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a href="#contact" style={navStyle} onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li className="nav-item">
                <a href="#resume" style={navStyle} onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
        </ul>
    )
}
export default Navigation;