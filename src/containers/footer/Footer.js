import React from 'react';

function Footer () {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center"></div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <span>LinkedIn</span>
                    </li>
                    <li className="ms-3">
                        <span>GitHub</span>
                    </li>
                    <li className="ms-3">
                        <span>Reddit</span>
                    </li>
                    <li className="ms-3">
                        <span>Twitter</span>
                    </li>
                    <li className="ms-3">
                        <span>Stack Overflow</span>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;