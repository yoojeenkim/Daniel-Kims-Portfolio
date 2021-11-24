import React from 'react';
import Project from '../../components/project/Project';

export default function Portfolio() {
    return (
        <div>
            <div className="d-flex align-items-center" id="portfolio">
                <h1>Portfolio</h1>
                <Project />
            </div>
        </div>
    );
}