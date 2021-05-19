import React from 'react';
import Button from 'elements/Button/Button';
import styles from './SectionOne.module.scss';

function SectionOne() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <p className={styles.lyrics}>
        I will never know if you love me<br/>
        Or my company, but I don't mind<br/>
        'Cause I ain't tryna be the one<br/>
        Been through this a thousand times
      </p>
      <div className={styles.banner}>
        <h1 className={styles.title}>DOI KHI</h1>
        <span className={styles.subtitle}>SUBOI</span>

        <div className={styles.buttons}>
          <Button
            background="transparent"
            label="PLAY VIDEO"
            onClick={() => alert('You played')}
          />
          <Button
            background="red"
            label="BUY ALBUM"
            onClick={() => alert('You played')}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
