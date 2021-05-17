import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.scss';

function Button({
  label,
  background,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button,
        background === 'red' && styles.redBg,
        background === 'transparent' && styles.transparentBg)
      }
    >
      <p className={clsx(styles.smallText, styles.label)}>{label}</p>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
