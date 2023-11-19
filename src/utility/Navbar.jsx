import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [activePage, setActivePage] = useState('home');

    const handleLinkClick = (e) => {
        setActivePage(e.target.pathname.split('/')[1]);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo">Design Agency</Link>
            <ul>
                <NavLink to="/" className={activePage === 'home' ? 'active' : ''} onClick={handleLinkClick}>Home</NavLink>
                <NavLink to="/team" className={activePage === 'team' ? 'active' : ''} onClick={handleLinkClick}>Team</NavLink>
                <NavLink to="/services" className={activePage === 'services' ? 'active' : ''} onClick={handleLinkClick}>Services</NavLink>
                <NavLink to="/projects" className={activePage === 'projects' ? 'active' : ''} onClick={handleLinkClick}>Projects</NavLink>
                <NavLink to="/testimonials" className={activePage === 'testimonials' ? 'active' : ''} onClick={handleLinkClick}>Testimonials</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
