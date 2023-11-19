
import React from 'react';
import '../assets/css/style.css';
const Testimonials = () => {

    const testimonialList = require('../public/database/data.json').testimonialList;

    return (
        <div>
            <h2>Testimonials</h2>
            <ul>
                {testimonialList.map((testimonial, index) => (
                    <li key={index}>
                        <p>{testimonial.quote}</p>
                        <p>{`- ${testimonial.author}`}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonials;
