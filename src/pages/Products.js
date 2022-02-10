import React from 'react';
import styled from "styled-components";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';


const Wrapper = styled.div`
  border-bottom: 1px solid #dfe6e9;
`;


function Products() {
  return <div>
       <Wrapper>
        <TopNav />
      </Wrapper>
      <Nav />
      <ProductsList/>
      <Footer/>
  </div>;
}

export default Products;
