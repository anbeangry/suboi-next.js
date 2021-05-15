import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';

function Item({ name, price, src }) {
  return <div className={styles.product}>
    <img
      className={styles.productImg}
      src={src} />
    <div className={styles.productInfo}>
      <h4>{name}</h4>
      <p className={styles.text}>USD {price}</p>
    </div>
  </div>;
}

Item.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  price: PropTypes.number,
};

export default Item;
