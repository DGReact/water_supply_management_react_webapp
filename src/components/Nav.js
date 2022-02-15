import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
// import { Badge } from "@material-ui/core";
// import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
// import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { tablet, mobile } from "../responsiveStyled";
import { Outlet, Link } from "react-router-dom";
import "../Components-css/Base.css";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: end; */
  /* margin: 0 0; */
  background: white;
  /* position: fixed; */
  left: 0;
`;
const LogoSection = styled.div`
  flex: 1;
  cursor: pointer;
  ${mobile({ flex: "2" })}
`;
const NavLinks = styled.div`
  // display: flex;
  // align-items: center;
  flex: 1;
  display: flex;
  justify-content: space-around;
  ${tablet({ display: "none" })}
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
`;
const Text = styled.p`
`;

const Nav = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
  });
  const isSticky = (e) => {
    var header = document.querySelector(".navBarContainer");
    window.scrollY > 100
      ? header.classList.add("stickyNav")
      : header.classList.remove("stickyNav");
  };

  return (
    <div className="background box-shadow navBarContainer">
      <Container>
        <Wrapper className="nav-bar-element">
          <LogoSection>
            <Logo src="./Image/water_logo.png" />
            {/* <Text>Water Supply</Text> */}
          </LogoSection>
          <NavLinks>
            <Link to="/" className="link">
              {" "}
              <Text className="nav-bar-batch">HOME </Text>
            </Link>
            <Link to="/services" className="link">
              {" "}
              <Text className="nav-bar-batch">About Us</Text>
            </Link>
            <Link to="/products" classNam0e="link">
              {" "}
              <Text className="nav-bar-batch">My Account</Text>
              <PermIdentityOutlinedIcon />
            </Link>
          </NavLinks>
          {/* <Search>
          <Input placeholder="Search  for items..." />
        </Search> */}
          {/* <UserProfile>
            <FavoriteBorderOutlinedIcon />
            <Badge badgeContent={4} color="primary">
              <LocalMallOutlinedIcon />
            </Badge>
            <PermIdentityOutlinedIcon />
          </UserProfile> */}
        </Wrapper>
      </Container>
      {/* <hr/> */}
    </div>
  );
};

export default Nav;
