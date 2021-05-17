import React from 'react';
import styles from './CartItems.module.scss';

function CartItems() {
  return (
    <div className={styles.cartItems}>
      <p className={styles.text}>Your cart is empty :(</p>
    </div>
  );
}
export default CartItems;
