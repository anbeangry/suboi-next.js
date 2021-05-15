import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.scss';

function Button({ label, background, margin }) {
  return (
    <button
      className={clsx(styles.button,
        background === 'red' && styles.redBg,
        background === 'transparent' && styles.transparentBg)
      }
      style={margin && {
        margin: `${margin} !important`,
      }}
    >
      <p className={clsx(styles.smallText, styles.label)}>{label}</p>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  background: PropTypes.string,
  margin: PropTypes.string,
};

export default Button;
