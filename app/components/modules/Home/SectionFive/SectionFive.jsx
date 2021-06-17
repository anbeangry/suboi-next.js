import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';
// import ReactPlayer from 'react-player/youtube';
import Button from 'elements/Button/Button';
import ArrowRight from 'public/icons/arrow-right.svg';
import { urlFor } from 'utils/sanity';
import ArrowRightRed from 'public/icons/arrow-right-red.svg';
import styles from './SectionFive.module.scss';

function SectionFive({ height, videos }) {
  const router = useRouter();
  const playerRef = useRef();
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  const handleOnClick = () => {
    if (isOpenVideo) {
      playerRef.current.focus();
      setIsOpenVideo(false);
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
        {/* <ReactPlayer
          controls
          playing={isOpenVideo}
          width='50%'
          height='50%'
          url="https://www.youtube.com/embed/CZJvBfoHDk0"
          ref={playerRef}
        /> */}
      </div>
      <div className={styles.videos}>
        {videos?.map((item, index) => <div key={index} className={styles.videoItem}>
            <div className={styles.overlay}></div>
            <div className={styles.videoImg}>
              <Image
                src={urlFor(item.thumbnail).url()}
                className={styles.nextImg}
                layout='fill'
                priority={true}
              />
            </div>
            <div className={styles.action}>
              <div className={styles.smallText}>{item.title}</div>
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
  videos: PropTypes.array,
};

export default SectionFive;
