import React, { useState, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/youtube';
import Button from 'elements/Button/Button';
import ArrowRight from 'public/icons/arrow-right.svg';
import ArrowRightRed from 'public/icons/arrow-right-red.svg';
import screenfull from 'screenfull';
import styles from './SectionFive.module.scss';

function SectionFive({ height, background }) {
  const router = useRouter();
  const playerRef = useRef();
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  const handleOnClick = () => {
    // eslint-disable-next-line react/no-find-dom-node
    screenfull.request(findDOMNode(playerRef.current));
    if (isOpenVideo) {
      setIsOpenVideo(false);
      // player.pauseVideo();
    } else {
      setIsOpenVideo(true);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ height: `${height}px` }}
    >
      <div className={clsx(styles.iframe, isOpenVideo && styles.iframeOpen)}>
        <ReactPlayer
          controls
              width='100%'
              height='100%'
          url="https://www.youtube.com/embed/CZJvBfoHDk0"
          ref={playerRef}/>
      </div>
      <div className={styles.videos}>
        {
          Array.from(Array(10)).map((item) => <div
            key={item}
            className={styles.videoItem}
          >
            <div className={styles.videoImg}>
              <Image
                src={background}
                className={styles.nextImg}
                layout='fill'
                priority={true}
              />
            </div>
            <div className={styles.action}>
              <div className={styles.smallText}>Doi Khi – Suboi feat. Rapper</div>
              <Button
                label="PLAY VIDEO"
                className={styles.button}
                onClick={handleOnClick}
              />
            </div>
          </div>)
        }
        <div className={styles.viewAll} onClick={() => router.push('/video')}>
          <div className={styles.icon}>
            <ArrowRight className={styles.white}/>
            <ArrowRightRed className={styles.red}/>
          </div>
          <div className={styles.viewAllBox}>
            <div className={styles.viewAllTop}>
              <h4>view all video</h4>
            </div>
            <div className={styles.viewAllBottom}>
              {Array.from(Array(20), (e, i) => <p key={i}>view all videos</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SectionFive.propTypes = {
  background: PropTypes.string,
  height: PropTypes.number,
};

export default SectionFive;
