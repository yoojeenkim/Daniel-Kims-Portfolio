import React from 'react';
import Navigation from './navigation/Navigation';

function Header ({ currentPage, handlePageChange }) {
    return (
        <header>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header> 
    );
}

export default Header;