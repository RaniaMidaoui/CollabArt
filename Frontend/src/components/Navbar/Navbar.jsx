import React from "react";
import styles from "./Navbar.module.css";
import img from './header_logo.png'

import { isAuthenticated } from "../../services/auth.service";
import { getUser } from "../../services/auth.service";
import { logout } from "../../services/auth.service";

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
            <a href={isAuthenticated() ? "/subjects" : "/signin"}  className={`${styles.nav} center`}>
              Subjects 
            </a>
            <a href={isAuthenticated() ? "/courses" : "/signin"}  className={`${styles.nav} center`}>
              My Courses
            </a>
            <a href={isAuthenticated() ? "/help" : "/signin"}  className={`${styles.nav} center`}>
              Help
            </a>
          </div>
          <div>
            {
              isAuthenticated() &&
                <div className="flex gap-2">
                    <img src={"https://ui-avatars.com/api/?name="+getUser().firstName+" "+getUser().lastName} alt="avatar" className="w-12 h-12 border rounded-3xl" />
                    <span className="text-gray-800 leading-4 mt-2">{getUser().firstName+" "+getUser().lastName}<br/>
                    <small className="text-gray-600">{getUser().role.toUpperCase()}</small></span>
                <button onClick={() => {
                  logout();
                  window.location.reload();
                }}
                type="button" className="ml-4 w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-900 transition-colors duration-200 bg-gray-200 hover:bg-gray-7   00 border-gray-700 rounded-lg gap-x-2 sm:w-auto">
                <svg className="w-4 h-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>
                    <span>Log out</span>
                </button>
                </div>
          }
          {
              !isAuthenticated() &&
              <>
                 <a href="/signin" className={styles.login}>
                 Log in
               </a>
               <a href="/signup">
                 <button className={styles.signup}>Sign Up</button>
               </a>
               </>
          }
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
