import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { tablet } from "../responsiveStyled";

const MainContainer = styled.div`
  background-color: #010204;
  padding: 1rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
const Information = styled.div``;
const Text = styled.p`
  color: #dead00;
  font-weight: 600;
  ${tablet({
    textAlign: "center",
    marginTop: "1rem"
  })}
`;
const List = styled.li`
  color: #fff;
  list-style: none;
  margin-top: 0.5rem;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  ${tablet({
    textAlign: "center",
  })}
`;
const QuickShop = styled.div``;
const ContactUs = styled.div``;
const StayConnected = styled.div`
  display: flex;
  flex-direction: column;
  ${tablet({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
const Image = styled.img`
  width: 80%;
`;

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <Wrapper>
          <Information>
            <Text>INFORMATION</Text>
            <ul>
              <List>About Us</List>
              <List>Terms & Conditions</List>
              <List>Privacy Policy</List>
              <List>FAQ</List>
            </ul>
          </Information>
          <QuickShop>
            <Text>QUICK SHOP</Text>
            <ul>
              <List>Sign In</List>
              <List>Create an Account</List>
              <List>My Account</List>
              <List>Wishlist</List>
            </ul>
          </QuickShop>
          <ContactUs>
            <Text>CONTACT US</Text>
            <ul>
              <List>New No. 19, Old No. 61, 28th Street</List>
              <List>M-Block, Delhi</List>
              <List>Chennai - 6000 152. India</List>
              <List>+91 1245873654</List>
              <List>contact@mail.com</List>
            </ul>
          </ContactUs>
          <StayConnected>
            <Text>STAY CONNECTED</Text>
            <ul style={{ display: "flex" }}>
              <List>
                <FacebookIcon />
              </List>
              <List style={{ margin: "0.5rem 0.2rem" }}>
                <TwitterIcon />
              </List>
              <List style={{ margin: "0.5rem 0.2rem" }}>
                <InstagramIcon />
              </List>
              <List>
                <YouTubeIcon />
              </List>
            </ul>
            <Image src="./medicine/pay.svg" />
          </StayConnected>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default Footer;
