// src/PlaylistPlayer.js
import React from 'react';

const PlaylistPlayer = ({ soundcloudPlaylistUrl, youtubePlaylistUrl }) => {
  // Default placeholder URLs in case props are not provided
  // Replace these with your actual playlist embed URLs
//   https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/957719626
  const defaultSoundcloudUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/957719626&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
  const defaultYoutubeUrl = "https://www.youtube.com/embed/videoseries?list=PLB62B2CB80905D918";

  return (
    <div class="playlist-container" style={styles.playlistWrapper}>
        <div style={styles.container}>
            <h2 class="title1">SLEEPWALKER PLAYLISTS</h2>
            <div>
                <iframe
                width="100%"
                height="300" // SoundCloud embeds often have a fixed height for visual players
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={soundcloudPlaylistUrl || defaultSoundcloudUrl}
                title="SoundCloud Playlist"
                style={styles.iframeBase}
                ></iframe>
            </div>
              <div style={styles.youtubeResponsiveContainer}>
              <iframe
                  src={youtubePlaylistUrl || defaultYoutubeUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Playlist"
                  style={styles.iframeResponsive}
              ></iframe>
              </div>
        </div>
    </div>

  );
};

const styles = {
  playlistWrapper:{
    width: '100%',
    margin: "50px",
    color: '#2fb606'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    maxWidth: '900px',
    margin: '100px auto',
    padding: '20px',
    backgroundColor: '#293335',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    position: 'absolute',
    width: '100%',
    left: '15%',
    top: '8%'

  },
  playerWrapper: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  iframeBase: {
    border: 'blue',
    borderRadius: '4px',
    // color: 'red'
  },
  // Styles for a responsive YouTube iframe (16:9 aspect ratio)
  youtubeResponsiveContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
    height: 0,
    overflow: 'hidden',
    backgroundColor: '#293335',
  },
  iframeResponsive: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '4px',
  },
};
<script>

</script>

export default PlaylistPlayer;