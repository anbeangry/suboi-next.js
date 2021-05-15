import React from 'react';
import PropTypes from 'prop-types';
import LanguageSelection from 'components/elements/LanguageSelection/LanguageSelection';
import Header from 'components/modules/Header/Header';
import Icon from 'components/elements/Icon/Icon';
import Facebook from '../../../../public/icons/fb.svg';
import Instagram from '../../../../public/icons/ig.svg';
import Youtube from '../../../../public/icons/youtube.svg';
import Spotify from '../../../../public/icons/spotify.svg';
import AppleMusic from '../../../../public/icons/fb-dark.svg';
import styles from './Default.module.scss';

function Default({ children }) {
  return (
    <div className={styles.default}>
      <Header />
      <LanguageSelection />
      <div className={styles.content}>{children}</div>
      <div className={styles.icons}>
        <Icon url="" icon={<AppleMusic />} />
        <Icon url="" icon={<Spotify />} />
        <Icon url="" icon={<Youtube />} />
        <Icon url="" icon={<Instagram />} />
        <Icon url="" icon={<Facebook />} />
      </div>
    </div>
  );
}

Default.propTypes = {
  children: PropTypes.any,
};

export default Default;
