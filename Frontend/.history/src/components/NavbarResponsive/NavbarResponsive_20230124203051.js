import styles from "../Navbar/Navbar.module.css";

const NavbarResponsive = ({ hamActive }) => {
  return (
    <div className={`${styles.navResWrapper} ${hamActive && styles.open}`}>
      <div className={styles.navResInner}>
        <ul className={`${styles.navResLinks}`}>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              Subjects
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              Instructors
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarResponsive;
