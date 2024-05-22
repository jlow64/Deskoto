import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  box-shadow: 0px 2px 8px -2px ${(props) => props.theme.color.black};
  z-index: 1;
  position: static;
  top: 0;
`;

export const NotificationContainer = styled.div`
  background: ${(props) => props.theme.color.darkGrey};
  color: ${(props) => props.theme.color.white};
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const NavMenuContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const LogoContainer = styled.div`
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const MenuIcon = styled.img`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    padding: 0.5rem;
    border-radius: 5px;
    &:hover {
      background: ${(props) => props.theme.color.brightGrey};
      box-shadow: 0 1px 5px -2px ${(props) => props.theme.color.black};
    }
  }
`;

export const NavLogo = styled(Link)`
  font-family: ${(props) => props.theme.font.satisfy};
  font-weight: 400;
  text-decoration: none;
  color: ${(props) => props.theme.color.darkGrey};
  font-size: ${(props) => props.theme.fontSize.logo};
  border: 2px dashed ${(props) => props.theme.color.lightGrey};
  border-radius: 50%;
  cursor: pointer;
`;

type VisibleProps = { visible: boolean };
export const NavMenu = styled.div<VisibleProps>`
  display: flex;
  list-style: none;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    width: 100%;
    justify-content: center;
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 5rem;
  gap: 0.2rem;
  text-decoration: none;
  color: ${(props) => props.theme.color.lightGrey};

  &:hover {
    border-radius: 5px;
    box-shadow: 0 2px 5px -2px ${(props) => props.theme.color.black};
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }
`;

export const NavMenuLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 5rem;
  gap: 0.2rem;

  &:hover {
    border-radius: 5px;
    box-shadow: 0 2px 5px -2px ${(props) => props.theme.color.black};
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }
`;

export const NavMenuHr = styled.hr`
  border: none;
  width: 80%;
  height: 0.2rem;
  border-radius: 20%;
  background: ${(props) => props.theme.color.black};

  @media screen and (max-width: 1000px) {
    width: 4rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.lightGrey};
`;

export const NavLoginContainer = styled.div<VisibleProps>`
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 1000px) {
    display: ${(props) => (props.visible ? 'flex' : 'none')};
  }
`;

export const NavLoginButton = styled.button`
  font-size: ${(props) => props.theme.fontSize.md};
  border: none;
  background: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.darkGrey};
  padding: 0.8rem;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px ${(props) => props.theme.color.black};

  &:active,
  &:hover {
    background: ${(props) => props.theme.color.lightGrey};
    color: ${(props) => props.theme.color.white};
  }
`;

export const NavCart = styled(Link)`
  display: flex;
  cursor: pointer;
`;

export const NavCartCount = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-left: -0.8rem;
  margin-top: -0.5rem;
  font-weight: 800;
  background: red;
  color: ${(props) => props.theme.color.white};
  border-radius: 50%;
`;
