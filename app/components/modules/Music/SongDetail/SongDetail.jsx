import React from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button/Button';
import styles from './SongDetail.module.scss';

function SongDetail({ item }) {
  return <div className={styles.itemDetail}>
    <div className={styles.left}>
      <img
        className={styles.itemImage}
        src={item.image}
      />
    </div>
    <div className={styles.right}>
      <div className={styles.titleBox}>
        <h3 className={styles.titleText}>{item.name}</h3>
        <p className={styles.text}>Article description</p>
        <p className={styles.text}>In Store (1-2 delivery days)</p>
      </div>
      <div className={styles.priceBox}>
        <h3 className={styles.titleText}>$ {item.price}</h3>
        <p className={styles.text}>Incl.taxes</p>
      </div>
      <div className={styles.sizeBox}>
        <h4 className={styles.titleTextSmall}>Choose your size</h4>
        <div className={styles.sizes}>
          <div className={styles.sizeItem}>
            S
          </div>
          <div className={styles.sizeItem}>
            M
          </div>
          <div className={styles.sizeItem}>
            L
          </div>
          <div className={styles.sizeItem}>
            XL
          </div>
        </div>
      </div>
      <div className={styles.addToCartBox}>
        <Button
          label="ADD TO CART"
          background="red"
        />
      </div>
    </div>
  </div>;
}

SongDetail.propTypes = {
  item: PropTypes.object,
};

export default SongDetail;