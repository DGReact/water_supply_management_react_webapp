import React from 'react';
import styled from 'styled-components';
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Footer from '../components/Footer';

const Wrapper = styled.div`
  border-bottom: 1px solid #dfe6e9;
`;


const ProductDetails = () =>{
    return(
        <>
            <Wrapper>
        <TopNav />
      </Wrapper>
      <Nav />
      <Footer/>
        </>
    )
}

export default ProductDetails;