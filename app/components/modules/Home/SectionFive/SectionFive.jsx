import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from 'elements/Button/Button';
import styles from './SectionFive.module.scss';

function SectionFive({ height, background }) {
  return (
    <div
      className={styles.container}
      style={{ height: `${height}px` }}
    >
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
              />
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

SectionFive.propTypes = {
  background: PropTypes.string,
  height: PropTypes.number,
};

export default SectionFive;
