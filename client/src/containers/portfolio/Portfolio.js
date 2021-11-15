import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Landing from '../../components/landing/Landing';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Resume from '../../components/resume/Resume';
// import Footer from './footer/Footer';


export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('Landing');

    const renderPage = () => {
        if (currentPage === 'Landing') {
            return <Landing />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            {/* <Footer /> */}
        </div>
    );
}