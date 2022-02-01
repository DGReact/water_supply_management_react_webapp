import React from 'react';
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  img: {
    width: "100%",
    height: "400px",
    objectFit:"cover",
    [theme.breakpoints.down('sm')]:{
      objectFit:"wrap",
      height: "180px",
    }
  },
  carousel: {
    marginTop: 10,
  },
}));


var items = [
    {
        img1: "https://i.ibb.co/M815SqF/1636353711-Home-Care.jpg"
    },
    {
        img1: "https://i.ibb.co/M815SqF/1636353711-Home-Care.jpg"
    }
]


const Slider = () =>{
    const classes = useStyles();
    return (
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "#ffffff",
            color: "#494949",
            borderRadius: "0",
            margin: 0,
          },
        }}
        className={classes.carousel}
      >
        {items.map((image) => (
          <img src={image.img1} className={classes.img} />
        ))}
      </Carousel>
    )
}

export default Slider;