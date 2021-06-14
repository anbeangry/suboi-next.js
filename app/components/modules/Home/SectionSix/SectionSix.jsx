import React from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import PhotoSlider from './PhotoSlider/PhotoSlider';
import styles from './SectionSix.module.scss';

function SectionSix({ background, photos, height }) {
  return (
    <div
      className={styles.container}
      style={{ height: `${height}px` }}
    >
      <Background
        url={background}
        className={styles.background}
      />
      <PhotoSlider photos={photos}/>
    </div>
  );
}

SectionSix.propTypes = {
  background: PropTypes.string,
  photos: PropTypes.array,
  height: PropTypes.number,
};

export default SectionSix;
