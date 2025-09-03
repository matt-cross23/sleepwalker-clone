// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Mixes from "./components/pages/Mixes";
import Interviews from "./components/pages/Interviews";
import PlaylistPlayer from "./components/pages/PlaylistPlayer";

function App() {
    // <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/957719626&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sleepwalkerent" title="SleepWalker Entertainment" target="_blank" style="color: #cccccc; text-decoration: none;">SleepWalker Entertainment</a> · <a href="https://soundcloud.com/sleepwalkerent/sets/mixes" title="Mixes" target="_blank" 
    const mySoundcloudPlaylist = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/957719626&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
    const myYoutubePlaylist = "https://www.youtube.com/embed/videoseries?list=PLV8HfLfzVplYb4L0sWOuWRSMJP0f5CUnV";
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                     <Route path="/"
                     element={
                        <> {/* Use a React Fragment if you have multiple elements for the root page */}
                        <PlaylistPlayer
                            soundcloudPlaylistUrl={mySoundcloudPlaylist}
                            youtubePlaylistUrl={myYoutubePlaylist}
                        />
                        </>
                    }
                    />
                    <Route exact path="/mixes" element={<Mixes />} />
                    <Route path="/interviews" element={<Interviews />} />
                    <Route
                        path="/contact"
                        // element={<Contact />}
                    />
                    {/* <Route path="/blogs" element={<Blogs />} />
                    <Route
                        path="/sign-up"
                        element={<SignUp />}
                    /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;