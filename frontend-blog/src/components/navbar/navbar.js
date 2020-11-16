import React from 'react';
import {Link} from 'react-router-dom';
import styles from './navbar.module.css';
import {LANDING, POSTCARD, POST, POSTFORM} from '../../routes/routes';
import PostcardView from '../../pages/postcardview/postcardview';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          PostCard LOGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link">
                <Link
                  value="home"
                  className={styles.__link_router}
                  to={LANDING}
                >
                  
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                <Link className={styles.__link_router} to={POST}>
                  
                </Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link ">
                <Link className={styles.__link_router} to={POSTCARD}>
                  PostCards
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                <Link className={styles.__link_router} to={POSTFORM}>
                  New Post
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
