import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './assets/css/style.css';



import Navbar from "./utility/Navbar.jsx";
import Home from "./components/Home.jsx";
import Team from "./components/Team.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Projects.jsx";


const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
        </div>
    );
};

export default App;
