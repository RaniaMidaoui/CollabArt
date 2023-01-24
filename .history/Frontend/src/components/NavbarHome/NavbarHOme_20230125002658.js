import React from 'react';
import styles from "./Navbar.module.css";
import img from './header_logo.png'

const NavbarHome = ({ hamActive, setHamActive }) => {
  const logo = img;
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <a href="/">
            <img src={logo} alt="logo" className={styles.brand} />
          </a>
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <a href="/subjects" className={`${styles.nav} center`}>
              Subjects
            </a>
            <a href="/instructors" className={`${styles.nav} center`}>
              Instructors
            </a>
            <a href="/courses" className={`${styles.nav} center`}>
              MyCourses
            </a>
            <a href="/help" className={`${styles.nav} center`}>
              Help
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarHome;
