// Need to create a responsive navbar. Ideally desktop + mobile
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/">
        <img
          className="nav-logo"
          src="/assets/deskoto-logo.png"
          alt=""
          loading="lazy"
        />
      </Link>
      <ul className="nav-menu">
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
          <hr />
        </li>
        <li>
          <Link className="nav-item" to="/shop">
            Shop
          </Link>
          <hr />
        </li>
        <li>
          <Link className="nav-item" to="/about">
            About
          </Link>
          <hr />
        </li>
        <li className="">
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
          <hr />
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img width="35px" src="/assets/shopping-bag-pocket.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
