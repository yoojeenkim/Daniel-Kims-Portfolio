import React from 'react';
import Navigation from '../navigation/Navigation';
import '../header/Header.css';

function Header ({ currentPage, handlePageChange }) {
    return (
        <header className="d-flex justify-content-center py-3">
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}

export default Header;