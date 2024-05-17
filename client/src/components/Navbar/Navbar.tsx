// Need to create a responsive navbar. Ideally desktop + mobile
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

type navStateProps = 'home' | 'shop' | 'about' | 'contact';

const Navbar = () => {
  const [navState, setNavState] = useState<navStateProps>('home');
  const [hideMenu, setHideMenu] = useState<boolean>(true);
  return (
    <nav className="nav-container">
      <div className="notification-container">
        Free Shipping for orders above $50!
      </div>
      <div className="nav-menu-container">
        <div className="logo-container">
          <Link className="nav-logo" onClick={() => setNavState('home')} to="/">
            Deskoto
          </Link>
          <img
            onClick={() => setHideMenu(!hideMenu)}
            className="menu-icon"
            src="/assets/menu.svg"
            alt=""
          />
        </div>
        <ul className={`nav-menu ${hideMenu && 'hide'}`}>
          <Link onClick={() => setNavState('home')} className="nav-item" to="/">
            <li>
              Home
              {navState === 'home' && <hr />}
            </li>
          </Link>
          <Link
            onClick={() => setNavState('shop')}
            className="nav-item"
            to="/shop"
          >
            <li>
              Shop
              {navState === 'shop' && <hr />}
            </li>
          </Link>
          <Link
            onClick={() => setNavState('about')}
            className="nav-item"
            to="/about"
          >
            <li>
              About
              {navState === 'about' && <hr />}
            </li>
          </Link>
          <Link
            onClick={() => setNavState('contact')}
            className="nav-item"
            to="/contact"
          >
            <li>
              Contact
              {navState === 'contact' && <hr />}
            </li>
          </Link>
        </ul>
        <div className={`nav-login-cart ${hideMenu && 'hide'}`}>
          <button>Login</button>
          <img width="35px" src="/assets/shopping-bag-pocket.svg" alt="" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
