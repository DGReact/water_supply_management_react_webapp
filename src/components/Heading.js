import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import { tablet } from "../responsiveStyled";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
const HeadName = styled.h1`
  ${tablet({fontSize: "1rem"})}
`;
const ParaName = styled.p`
  ${tablet({fontSize: "0.8rem"})}
`;

const Heading = ({ title, para }) => {
  return (
    <Container maxWidth="lg">
      <Wrapper>
        <HeadName>{title}</HeadName>
        <ParaName>{para}</ParaName>
      </Wrapper>
    </Container>
  );
};

export default Heading;
