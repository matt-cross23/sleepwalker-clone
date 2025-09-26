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
            <h2>Your Playlist Hub</h2>
            <div>
                <h3>SoundCloud Playlist</h3>
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

            <div style={styles.playerWrapper}>
                <h3>YouTube Playlist</h3>
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
    </div>

  );
};

const styles = {
  playlistWrapper:{
    width: '45%',

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    maxWidth: '900px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',

  },
  playerWrapper: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  iframeBase: {
    border: 'none',
    borderRadius: '4px',
  },
  // Styles for a responsive YouTube iframe (16:9 aspect ratio)
  youtubeResponsiveContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
    height: 0,
    overflow: 'hidden',
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