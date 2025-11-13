// Filename - pages/interview.js

import React from 'react';
import '../css/Interviews.css'; // Assume you will create this CSS file for styling



const interviewsData = [
    {
        title: 'NATANYA INTERVIEW',
        videoId: 'YOUR_VIDEO_ID1',
        date: "4/16/2025",
        description: "Interview w/ London Singer and producer Natanya. We talk about her upcoming EP Feline’s Return, producing vs. singing, locking in w/ supporters, maintaining creative control in a music career, London’s underground scene, and a lot more!  This another HUGE interview y’all so tap in. Natanya already has crazy buzz and is really gonna go up when this EP drops June 27th Watch or Listen"
    },
    {
        title: '509 BMG INTERVIEW',
        videoId: 'YOUR_VIDEO_ID2',
        date: "4/16/2025",
        description: 'Interview w/ Orlando rapper and producer 509 BMG. We talk about staying in rap for the love of the game, Weird Al, Orlando music scene (and his top 5 from the city), DS essentials, locking in w/ Niontay, and more!'
    }
];

const Interviews = () => {
    return (
        <div class="interview_container">
            <nav className="nav-bar">
                <h1 class="title1">INTERVIEWS</h1>
            </nav>
            <div className="container">
                {interviewsData.map((interview, index) => (
                    <div className="interview" key={index}>
                        <h2 class="title1">{interview.title}</h2>
                        <span class="interview-date">{interview.date}</span>
                        <p class="interview-text">{interview.description}</p>
                        <iframe
                            className="youtube-frame"
                            src={`https://www.youtube.com/embed/${interview.videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={interview.title}
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interviews;