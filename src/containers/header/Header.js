import React from 'react';
import Navigation from '../navigation/Navigation';

const headerStyle =  {
    height: '80px',
    marginBottom: '1.3rem',
};

function Header ({ currentPage, handlePageChange }) {
    return (
        <header className="d-flex justify-content-center py-3" style={headerStyle}>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}

export default Header;