import React from "react";
import { Container } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import { productsData } from "../constants/data";

// mui v4
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

const useStyle = makeStyles((theme) => ({
  image: {
    height: 180,
    [theme.breakpoints.down("sm")]: {
      height: 95,
    },
  },
  component: {
    marginTop: 12,
    background: "#ffffff",
  },
  deal: {
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    borderBottom: "2px solid #E5E5E5",
  },
  timer: {
    width: 24,
    margin: "0 0.8rem 0 1.5rem",
  },
  timerspan: {
    color: "#7f7f7f",
  },
  txt: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
  },
  curosol: {
    padding: "25px 10px",
  },
  curosoltext: {
    fontSize: 14,
    marginTop: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  timr: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Products = () => {
  const classes = useStyle();
  return (
    <Container maxWidth="lg">
      <Box className={classes.component}>
        <Carousel
          className={classes.curosol}
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          showDots={false}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {productsData.map((product) => (
            <a to={product.id} style={{ textDecoration: "none" }}>
              <Box textAlign="center">
                <img src={product.url} className={classes.image} />
                <Typography
                  className={classes.curosoltext}
                  style={{ fontWeight: "600", color: "#212121", padding: "0.5rem" }}
                >
                  {product.title.shortTitle}
                </Typography>
                <Typography
                  className={classes.curosoltext}
                  style={{ color: "green" }}
                >
                  {product.discount}
                </Typography>
                <Typography
                  className={classes.curosoltext}
                  style={{ color: "#212121", opacity: "0.6" }}
                >
                  {product.tagline}
                </Typography>
              </Box>
            </a>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default Products;
