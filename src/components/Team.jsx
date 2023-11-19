import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/style.css'
const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        axios.get('/database/teamMember.json')
            .then((response) => response.data)
            .then((data) => setTeamMembers(data));
    }, []);

    return (
        <div className="team">
            <h2>Our Team</h2>
            <ul>
                {teamMembers.map((member) => (
                    <li key={member.name}>
                        <img src={member.imageUrl} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.title}</p>
                        <p>{member.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Team;