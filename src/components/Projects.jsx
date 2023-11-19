import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('/database/testimonialList.json')
            .then((response) => response.data)
            .then((data) => setTestimonials(data));
    }, []);

    return (
        <div className="testimonials">
            <h2>What Our Clients Say</h2>
            <ul>
                {testimonials.map((testimonial) => (
                    <li key={testimonial.name}>
                        <img src={testimonial.imageUrl} alt={testimonial.name} />
                        <p>{testimonial.quote}</p>
                        <span>{testimonial.name} - {testimonial.company}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonials;
