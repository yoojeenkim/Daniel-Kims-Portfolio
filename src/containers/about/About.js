import React from 'react';

const flexStyle = {
    flex: '1'
}

const cardStyle = {
    width: '60%',
    marginLeft: '60px'
}
const imgStyle = {
    width: '75%',
    objectFit: 'cover'
}

export default function About() {
    return (
        <div className="d-flex align-items-center">
            <div style={flexStyle}>
                <div style={cardStyle}>
                    <img src="https://balanceandpotential.com/wp-content/uploads/2018/06/bio-portrait-placeholder.jpg" alt="Portrait" style={imgStyle} />
                </div>
            </div>
            <div style={flexStyle}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    );
}