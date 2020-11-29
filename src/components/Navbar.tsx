import * as React from "react";
import styled from "styled-components";
import { colors } from "../ThemeConfig";

export interface NavbarProps {}

let StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 5%;
  background-color: ${colors.navy_blue};

  @media screen and (max-width: 600px) {
    padding: 30px 15px;
  }
`;
let Logo = styled.a`
  margin-right: auto;
  color: ${colors.primary};
`;

let NavContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  & a {
    font-weight: 500;
    color: ${colors.grey};
    text-decoration: none;
  }

  & li {
    padding: 0px 20px;
  }

  & li a {
    transition: all 0.3s ease 0s;
  }

  & li a:hover {
    color: ${colors.primary};
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

let CallToAction = styled.a`
  margin-left: 20px;
  padding: 9px 25px;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    color: ${colors.navy_blue};
    background-color: ${colors.primary};
    text-decoration: none;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
let MobileMenuButton = styled.p`
  margin-left: 20px;
  margin-bottom: 0;
  padding: 9px 25px;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  display: none;
  &:hover {
    color: ${colors.navy_blue};
    background-color: ${colors.primary};
    text-decoration: none;
  }

  @media screen and (max-width: 800px) {
    display: initial;
  }
`;
const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <StyledHeader>
      <Logo href="/">
        <h1>Hallo</h1>
      </Logo>
      <nav>
        <NavContainer>
          <li>
            <a href="#">Test</a>
          </li>
          <li>
            <a href="#">Test</a>
          </li>
          <li>
            <a href="#">Test</a>
          </li>
        </NavContainer>
      </nav>
      <CallToAction href="#">Contact</CallToAction>
      <MobileMenuButton>Menu</MobileMenuButton>
    </StyledHeader>
  );
};

export default Navbar;
