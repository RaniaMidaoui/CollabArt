import React from "react";
import styles from "./Navbar.module.css";
import img from './header_logo.png'

const Navbar = ({ hamActive, setHamActive }) => {
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
            <a href="/signin" className={`${styles.nav} center`}>
              Subjects
            </a>
            <a href="/signin" className={`${styles.nav} center`}>
              Instructors
            </a>
            <a href="/signin" className={`${styles.nav} center`}>
              Help
            </a>
          </div>
          <div>
            <a href="/signin" className={styles.login}>
              Log in
            </a>
            <a href="/signup">
              <button className={styles.signup}>Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
