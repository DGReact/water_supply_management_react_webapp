import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { tablet, mobile } from "../responsiveStyled";
import { Outlet, Link } from "react-router-dom";





const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;
const LogoSection = styled.div`
  flex: 1;
  cursor: pointer;
  ${mobile({flex: "2"})}
`;
const NavLinks = styled.div`
  // display: flex;
  // align-items: center;
  flex: 1;
  display: flex;
  justify-content: space-around;
  ${tablet({display: "none"})}
`;
// const Search = styled.div`
//   flex: 2;
//   ${mobile({display: "none"})}
// `;
const UserProfile = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 100px;
`;
const Text = styled.p`
  font-weight: 800;
  Color: #438C96;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <div className="background box-shadow">
    <Container >
      <Wrapper>
        <LogoSection>
          {/* <Logo src="./medicine/logo.svg" /> */}
          <Text>Water Supply</Text>
        </LogoSection>
        <NavLinks>
         <Link to="/" className="link"> <Text>HOME </Text></Link>
         <Link to="/services" className="link"> <Text>OUR SERVICES</Text></Link>
         <Link to="/products" className="link"> <Text>PRODUCTS</Text></Link>
          <Text>CONTACT US</Text>
        </NavLinks>
        {/* <Search>
          <Input placeholder="Search  for items..." />
        </Search> */}
        <UserProfile>
          <FavoriteBorderOutlinedIcon />
          <Badge badgeContent={4} color="primary">
            <LocalMallOutlinedIcon />
          </Badge>
          <PermIdentityOutlinedIcon />
        </UserProfile>
      </Wrapper>
     
    </Container>
    {/* <hr/> */}
    </div>
  );
};

export default Nav;
