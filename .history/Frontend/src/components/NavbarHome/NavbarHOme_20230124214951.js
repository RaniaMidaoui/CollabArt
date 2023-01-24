import React from "react";
import styles from "./Navbar.module.css";
import img from './header_logo.png'

const NavbarHome = ({ hamActive, setHamActive }) => {
  const logo = img;
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  const searchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  /*if (searchInput.length > 0) {
    countries.filter((country) => {
    return country.name.match(searchInput);
  });*/
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
          <img src={logo} alt="logo" className={styles.brand} />
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
              MyCourses
            </a>
            <a href="/signin" className={`${styles.nav} center`}>
              Help
            </a>
            <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarHome;
