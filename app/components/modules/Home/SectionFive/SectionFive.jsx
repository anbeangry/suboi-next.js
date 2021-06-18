import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/youtube';
import { isMobile } from 'react-device-detect';
import Button from 'elements/Button/Button';
import ArrowRight from 'public/icons/arrow-right.svg';
import { urlFor } from 'utils/sanity';
import ArrowRightRed from 'public/icons/arrow-right-red.svg';
import styles from './SectionFive.module.scss';

function SectionFive({ height, videos }) {
  const router = useRouter();
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleOnClick = (url, index) => {
    if (isMobile) {
      router.push(url);
    } else {
      setIsOpenVideo(true);
      setCurrentVideo(index);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ height: `${height}px` }}
    >
      <div className={styles.videos}>
        {videos?.map((item, index) => <div key={index} className={styles.videoItem}>
          {currentVideo === index + 1 && <div className={styles.iframe}>
              <ReactPlayer
                controls
                playing={isOpenVideo}
                width='100%'
                height='100%'
                url={item.youtubeEmbedLink}
              />
            </div>
          }
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
              onClick={() => handleOnClick(item.youtubeEmbedLink, index + 1)}
            />
          </div>
          </div>)}
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
