import * as React from "react";
import styled from "styled-components";
import { colors } from "../ThemeConfig";
import { HashLink } from "react-router-hash-link";
import { HashRouter as Router } from "react-router-dom";
import { ReactComponent as Close } from "../svg/Close.svg";
export interface NavbarProps {}

let StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 5%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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
let NavContainerMobile = styled.ul`
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -40vw;
  width: 40vw;
  height: 100vh;
  padding: 50px 25px 25px 25px;
  z-index: 99;
  background-color: #172a45;
  transition: all 0.3s ease 0s;
  display: flex;

  &.open {
    right: 0;
  }
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
let MobileNavCloseButton = styled.button`
  position: fixed;
  top: 1rem;
  right: -100%;
  color: ${colors.primary};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  z-index: 100;

  &.open {
    right: 0;
  }
`;
const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <StyledHeader>
      <Logo href="/">
        {/* Inside the Logo component you can insert text, or an image to display on the left side */}
        <h1>Vallia</h1>
      </Logo>
      <nav>
        <NavContainer>
          <Router>
            {/* Each <li> represents a link. If  you want to use the HashLink, you need to add ids to the components which you want to navigate to.
             Look for comments regarding this in the files from the components/ folder */}
            <li>
              <HashLink smooth to="#team">
                Team
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#team">
                Test
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#team">
                Test
              </HashLink>
            </li>
          </Router>
        </NavContainer>
      </nav>
      <CallToAction href="#">Contact</CallToAction>
      <MobileMenuButton
        onClick={() => {
          document.getElementById("mobile_nav")?.classList.add("open");
          document
            .getElementById("mobile_nav_close_button")
            ?.classList.add("open");
        }}
      >
        Menu
      </MobileMenuButton>
      <nav>
        <MobileNavCloseButton
          id="mobile_nav_close_button"
          onClick={(event) => {
            document.getElementById("mobile_nav")?.classList.remove("open");
            event.currentTarget.classList.remove("open");
          }}
        >
          <Close width="2rem" height="2rem" fill={colors.primary} />
        </MobileNavCloseButton>
        <NavContainerMobile id="mobile_nav">
          <Router>
            {/* Each <li> represents a link. If  you want to use the HashLink, you need to add ids to the components which you want to navigate to.
             Look for comments regarding this in the files from the components/ folder */}
            <li>
              <HashLink smooth to="#team">
                Team
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#team">
                Test
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#team">
                Test
              </HashLink>
            </li>
          </Router>
        </NavContainerMobile>
      </nav>
    </StyledHeader>
  );
};

export default Navbar;
