import React from 'react';
import Item from 'components/modules/Shop/Item/Item';
import styles from './ShopPage.module.scss';

function ShopPage() {
  return <div className={styles.container}>
    <Item />
  </div>;
}

export default ShopPage;
