import React from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
// import OfferSection from "../components/OfferSection";
import Whyus from "../components/Whyus"
import Heading from "../components/Heading";
import Products from "../components/Products";
import Banner from "../components/Banner";
import Branding from "../components/Branding";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  border-bottom: 1px solid #dfe6e9;
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <TopNav />
      </Wrapper>
      <Nav />
      <Slider />
      {/* <OfferSection /> */}
      <Whyus/>
      <Heading
        title="FEATURED PRODUCTS"
        para="Explore our best rated Online Ayurvedic Medicines"
      />
      <Products />
      <Heading
        title="TOP SELLING AYURVEDIC MEDICINES"
        para="Explore our best rated Online Ayurvedic Medicines"
      />
      <Products />
      <Banner url="./medicine/banner.svg" />
      <Heading
        title="NEW PRODUCTS"
        para="Explore our best rated Online Ayurvedic Medicines"
      />
      <Products />
      <Heading
        title="AYURVEDIC PHARMACIES IN INDIA"
        para="Pick our top ayurvedic brands"
      />
      <Branding />
      <Footer />
    </>
  );
};

export default Home;
