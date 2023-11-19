import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    const [workList, setWorkList] = useState([]);

    useEffect(() => {
        axios.get('/database/workList.json')
            .then((response) => response.data)
            .then((data) => setWorkList(data));
    }, []);

    return (
        <div className="home">
            <h2>Our Work</h2>
            <ul>
                {workList.map((project) => (
                    <li key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul>
                            {project.technologies.map((technology) => (
                                <li key={technology}>{technology}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;