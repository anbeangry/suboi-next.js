import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.bigText}>This is header</p>
    </header>
  );
}

export default Header;
