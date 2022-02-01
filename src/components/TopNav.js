import React from "react";
import styled from "styled-components";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import { Container } from "@material-ui/core";
import { desktop } from "../responsiveStyled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5rem 0;

  ${desktop({ display: "none" })}
`;

const Text = styled.p`
  display: flex;
`;
const Span = styled.span`
  margin-left: 0.2rem;
  color: #2d3436;
`;

const TopNav = () => {
  return (
    <Container maxWidth="lg" >
      <Wrapper>
        <Text>
          <CallIcon />
          <Span>Call Us: +123-456-790</Span>
        </Text>
        <Text>
          <EmailIcon />
          <Span>Mail: contact.sumitkrdas@gmail.com</Span>
        </Text>
        <Text>
          <LocationOnIcon />
          <Span>Kalkata West Bengal</Span>
        </Text>
        <Text>
          <LaptopMacIcon />
          <Span>
            You can request appointment (pending confirmation) in 24 hours
          </Span>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default TopNav;
