import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="/" className={styles.navItem}>See Your Stories</a></li>
        <li className={styles.navItem}><a href="/" className={styles.navItem}>Create a Story</a></li>
        <li className={styles.navItem}><a href="/" className={styles.navItem}>Community Stories</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;