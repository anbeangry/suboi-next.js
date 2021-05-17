import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './CartButton.module.scss';

function CartButton({ onClick, appearCart, openCart }) {
  return (
    <div
      className={clsx(
        styles.cartButton,
        openCart && styles.openCart,
        appearCart && styles.appearCart,
      )}
      onClick={onClick}
      id="cart"
    >
      <p className={styles.smallText}>Cart (0)</p>
    </div>
  );
}

CartButton.propTypes = {
  onClick: PropTypes.func,
  appearCart: PropTypes.bool,
  openCart: PropTypes.bool,
};

export default CartButton;
