import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import styles from './VideoEmbedded.module.scss';

function VideoEmbedded({ url, onClick }) {
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onPlayVideo = () => {
    player.playVideo();
    const requestFullScreen = iframe.requestFullScreen
      || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }
  };

  const onPauseVideo = () => {
    player.pauseVideo();
  };

  return (
    <div className={styles.videoEmbedded}>
      <YouTube videoId={'CZJvBfoHDk0'} onReady={onReady} />
    </div>
  );
}

VideoEmbedded.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
};

export default VideoEmbedded;
