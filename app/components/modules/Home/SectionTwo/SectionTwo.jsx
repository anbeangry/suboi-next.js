import Background from 'elements/Background/Background';
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { PortableText } from 'utils/sanity';
import styles from './SectionTwo.module.scss';

function SectionTwo({ background, about, height }) {
  const { locale } = useRouter();
  return (
    <div
      className={styles.container}
      style={{ height: `${height}px` }}
    >
      <div className={styles.overlay}></div>
      <Background
        url={background}
        className={styles.background}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          SUBOI
        </h1>
        <div className={styles.desc}>
          <PortableText blocks={about?.biography?.lang?.[locale]} />
        </div>
      </div>
    </div>
  );
}

SectionTwo.propTypes = {
  background: PropTypes.string,
  about: PropTypes.object,
  height: PropTypes.number,
};

export default SectionTwo;
