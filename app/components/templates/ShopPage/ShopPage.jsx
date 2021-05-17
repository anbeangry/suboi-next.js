import React, { useEffect, useState } from 'react';
import Item from 'components/modules/Shop/Item/Item';
import Cart from 'components/modules/Shop/Cart/Cart';
import CartButton from 'components/modules/Shop/CartButton/CartButton';
import styles from './ShopPage.module.scss';

const items = [
  {
    id: '1',
    name: 'SUBOI TOUR SHIRT',
    price: 1,
    image: 'https://i.ibb.co/XCQMY1W/hoodieblack.png',
  },
  {
    id: '2',
    name: 'SUBOI TOUR SHIRT',
    price: 1,
    image: 'https://i.ibb.co/XCQMY1W/hoodieblack.png',
  },
  {
    id: '3',
    name: 'SUBOI TOUR SHIRT',
    price: 1,
    image: 'https://i.ibb.co/XCQMY1W/hoodieblack.png',
  },
];

function ShopPage() {
  const [openCart, setOpenCart] = useState(false);
  const [appearCart, setAppearCart] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.innerWidth <= 1024 && window.innerWidth >= 414) {
        if (!openCart) {
          if (this.prev < window.pageYOffset) {
            setAppearCart(true);
          } else {
            setAppearCart(false);
          }
          this.prev = window.pageYOffset;
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [openCart]);

  const handleOnClose = (event) => {
    const { id } = event.target;
    if (id === 'cart' || id === 'box' || id === 'btn') {
      if (openCart) {
        setOpenCart(false);
        document.body.style.overflow = 'auto';
      } else {
        setOpenCart(true);
        setAppearCart(false);
        document.body.style.overflow = 'hidden';
      }
    }
  };

  return <div className={styles.container}>
    <div className={styles.background}/>
    <div className={styles.products}>
      { items && items.map((item) => <Item
          key={item.id}
          src="https://i.ibb.co/XCQMY1W/hoodieblack.png"
          name="SUBOI TOUR SHIRT"
          price={25}
        />)}
      <CartButton
        openCart={openCart}
        appearCart={appearCart}
        onClick={handleOnClose}
      />
    </div>
    <Cart
      openCart={openCart}
      onClick={handleOnClose}
    />
  </div>;
}

export default ShopPage;
