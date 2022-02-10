import React from 'react';
import styled from "styled-components";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Servicesslider from '../components/Servicesslider';
import Form from '../components/Form';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  border-bottom: 1px solid #dfe6e9;
`;


function Ourservices() {
  return <div>
       <Wrapper>
        <TopNav />
      </Wrapper>
      <Nav />
      <Servicesslider/>
      <Form/>
      <Footer/>
  </div>;
}

export default Ourservices;
