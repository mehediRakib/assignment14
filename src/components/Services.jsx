import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('/database/service.json')
            .then((response) => response.data)
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="services">
            <h2>Our Services</h2>
            <ul>
                {services.map((service) => (
                    <li key={service.title}>
                        <i className={service.icon}></i>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
