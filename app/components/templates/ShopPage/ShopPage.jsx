import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Item from 'components/modules/Shop/Item/Item';
import styles from './ShopPage.module.scss';

function ShopPage() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset >= window.innerHeight - 100) {
        setScroll(true);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div className={clsx(styles.container,
    scroll && styles.scroll)}
  >
    <div className={styles.products}>
      <Item
        src="https://i.ibb.co/XCQMY1W/hoodieblack.png"
        name="SUBOI TOUR SHIRT"
        price={25}
      />
      <Item
        src="https://i.ibb.co/XCQMY1W/hoodieblack.png"
        name="SUBOI TOUR SHIRT"
        price={25}
      />
      <Item
        src="https://i.ibb.co/XCQMY1W/hoodieblack.png"
        name="SUBOI TOUR SHIRT"
        price={25}
      />
    </div>
  </div>;
}

export default ShopPage;
