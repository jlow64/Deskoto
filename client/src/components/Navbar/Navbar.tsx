// Need to create a responsive navbar. Ideally desktop + mobile
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

type menuProps = 'home' | 'shop' | 'about' | 'contact';

const Navbar = () => {
  const [menu, setMenu] = useState<menuProps>('home');
  const [hideMenu, setHideMenu] = useState<boolean>(true);
  const [cartCount, setCartCount] = useState<number>(0);
  return (
    <nav className="nav-container">
      <div className="notification-container">
        Free Shipping for orders above $50!
      </div>
      <div className="nav-menu-container">
        <div className="logo-container">
          <Link className="nav-logo" onClick={() => setMenu('home')} to="/">
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
          <Link onClick={() => setMenu('home')} className="nav-item" to="/">
            <li>
              Home
              {menu === 'home' && <hr />}
            </li>
          </Link>
          <Link onClick={() => setMenu('shop')} className="nav-item" to="/shop">
            <li>
              Shop
              {menu === 'shop' && <hr />}
            </li>
          </Link>
          <Link
            onClick={() => setMenu('about')}
            className="nav-item"
            to="/about"
          >
            <li>
              About
              {menu === 'about' && <hr />}
            </li>
          </Link>
          <Link
            onClick={() => setMenu('contact')}
            className="nav-item"
            to="/contact"
          >
            <li>
              Contact
              {menu === 'contact' && <hr />}
            </li>
          </Link>
        </ul>
        <div className={`nav-login-cart ${hideMenu && 'hide'}`}>
          <button>Login</button>
          <img width="35px" src="/assets/shopping-bag-pocket.svg" alt="" />
          <div className="nav-cart-count">{cartCount}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
