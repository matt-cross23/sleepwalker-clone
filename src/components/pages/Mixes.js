// Filename - pages/mixes.js

import React from 'react';
import '../css/Mixes.css'; // Assume you will create this CSS file for styling



const MixesData = [
    {
        title: 'NATANYA INTERVIEW',
        videoId: 'YOUR_VIDEO_ID1',
        description: "4/16/2025 Interview w/ London Singer and producer Natanya. We talk about her upcoming EP Feline’s Return, producing vs. singing, locking in w/ supporters, maintaining creative control in a music career, London’s underground scene, and a lot more!  This another HUGE interview y’all so tap in. Natanya already has crazy buzz and is really gonna go up when this EP drops June 27th Watch or Listen"
    },
    {
        title: '509 BMG INTERVIEW',
        videoId: 'YOUR_VIDEO_ID2',
        description: 'Interview w/ Orlando rapper and producer 509 BMG. We talk about staying in rap for the love of the game, Weird Al, Orlando music scene (and his top 5 from the city), DS essentials, locking in w/ Niontay, and more!'
    }
];

const Mixes = () => {
    return (
        <div class="mixes_container">
            <nav className="nav-bar">
                <h1>Mixes</h1>
            </nav>
            <div className="container">
                {MixesData.map((mixes, index) => (
                    <div className="mixes" key={index}>
                        <h2>{mixes.title}</h2>
                        <iframe
                            className="youtube-frame"
                            src={`https://www.youtube.com/embed/${mixes.videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={mixes.title}
                        ></iframe>
                        <p>{mixes.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mixes;