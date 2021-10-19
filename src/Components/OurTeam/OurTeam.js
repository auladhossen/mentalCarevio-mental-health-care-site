import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './OurTeam.css';

const OurTeam = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('./expert.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    return (
        <div className="teams">
            <div className="team">
                <h1>Welcome To Mental Carevio</h1>
            </div>
            <div>
                <h2 className="professional-psychology mt-5">Focusing Your Mind, With The Best <br /> Therapeutic Care</h2>
                <p className="depression-solution fw-bold">EXPERT MEMBER</p>
                <div className="teams-container">
                    {
                        // looping for getting single course component 
                        teams.map(team => <Team team={team}
                            key={team.id}
                        ></Team>)
                    }
                </div>
            </div>

        </div>
    );
};

export default OurTeam;