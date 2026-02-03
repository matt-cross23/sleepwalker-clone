import React from "react";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Mixes from "./components/pages/Mixes";
import Interviews from "./components/pages/Interviews";
import PlaylistPlayer from "./components/pages/PlaylistPlayer";

function App() {
  const mySoundcloudPlaylist =
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/957719626&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

  const myYoutubePlaylist =
    "https://www.youtube.com/embed/videoseries?list=PLV8HfLfzVplYb4L0sWOuWRSMJP0f5CUnV";

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <PlaylistPlayer
              soundcloudPlaylistUrl={mySoundcloudPlaylist}
              youtubePlaylistUrl={myYoutubePlaylist}
            />
          }
        />

        <Route path="/mixes" element={<Mixes />} />
        <Route path="/interviews" element={<Interviews />} />
      </Routes>
    </Router>
  );
}

export default App;