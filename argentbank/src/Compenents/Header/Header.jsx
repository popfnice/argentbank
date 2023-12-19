import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setToken, setFirstName, setLastName } from "../../reducers/profilSlice";
import logo from "../../asset/argentBankLogo.webp";
import styles from './style/header.module.css';
import compareStorage from "../../utils/compareStorage";
import { selectUserName } from "../../utils/selector";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const token = compareStorage();

  const resetState = () => {
    dispatch(setFirstName(null));
    dispatch(setLastName(null));
    dispatch(setUserName(null));
    dispatch(setToken(null));
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    localStorage.clear();
    resetState();
    navigate("/");
  }

  return (
    <header className={styles.header}>
      <nav className={styles.headerMainNav}>
        <Link to={"./"} className={styles.headerMainNavItemLogo}>
          <img
            className={styles.headerMainNavItemLogoImage}
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.srOnly}>Argent Bank</h1>
        </Link>
        <div>
          {token ? (
            <>
              <Link to={"./profile"} className={styles.headerMainNavItem}>
                <i className="fa fa-user-circle"></i>
                {userName}
              </Link>
              <Link to={"./"} className={styles.headerMainNavItem} onClick={handleSignOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </>
          ) : (
            <Link to={"./logIn"} className={styles.headerMainNavItem}>
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
