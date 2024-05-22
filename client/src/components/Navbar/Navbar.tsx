// Need to create a responsive navbar. Ideally desktop + mobile
import { useEffect, useState } from 'react';
import {
  NavContainer,
  NotificationContainer,
  LogoContainer,
  NavLogo,
  NavMenuContainer,
  NavMenu,
  NavItem,
  NavMenuHr,
  MenuIcon,
  NavLoginContainer,
  NavLoginButton,
  NavCart,
  NavCartCount,
} from './style';

type menuProps = 'home' | 'shop' | 'about' | 'contact';

const Navbar = () => {
  const [menu, setMenu] = useState<menuProps>('home');
  const [visible, setVisible] = useState<boolean>(true);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    setCartCount(0);
  }, []);

  return (
    <NavContainer>
      <NotificationContainer>
        Free Shipping for orders above $50!
      </NotificationContainer>
      <NavMenuContainer>
        <LogoContainer>
          <NavLogo onClick={() => setMenu('home')} to="/">
            Deskoto
          </NavLogo>
          <MenuIcon
            onClick={() => setVisible(!visible)}
            className="menu-icon"
            src="/assets/images/menu.svg"
            alt=""
          />
        </LogoContainer>
        <NavMenu visible={visible}>
          <NavItem onClick={() => setMenu('home')} to="/">
            Home
            {menu === 'home' && <NavMenuHr />}
          </NavItem>
          <NavItem onClick={() => setMenu('shop')} to="/shop">
            Shop
            {menu === 'shop' && <NavMenuHr />}
          </NavItem>
          <NavItem onClick={() => setMenu('about')} to="/about">
            About
            {menu === 'about' && <NavMenuHr />}
          </NavItem>
          <NavItem onClick={() => setMenu('contact')} to="/contact">
            Contact
            {menu === 'contact' && <NavMenuHr />}
          </NavItem>
        </NavMenu>
        <NavLoginContainer visible={visible}>
          <NavLoginButton onClick={() => alert('Login popup')}>
            Login
          </NavLoginButton>
          <NavCart to="/cart">
            <img
              width="35px"
              src="/assets/images/shopping-bag-pocket.svg"
              alt="Shopping cart"
            />
            <NavCartCount>{cartCount}</NavCartCount>
          </NavCart>
        </NavLoginContainer>
      </NavMenuContainer>
    </NavContainer>
  );
};

export default Navbar;
