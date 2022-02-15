import React from "react";
import { Container, Button } from "@material-ui/core";
import "../Components-css/Base.css";
import { newproduct } from "../constants/data";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Newproducts() {
  return (
    <div>
      <Container>
        <h1 className="custom-text1">New Products</h1>

        <Grid container spacing={2}>
          {newproduct.map((item,index) => (
            <Grid
              item
              xs={3}
              md={3}
              lg={3}
              sx={{ boxShadow: 3, p: 3 }}
              className="card"  
            >
            <div className="container-item" key={index}>
              <Link to="/product-detail" className="link">
                <img src={item.url} alt="not found" className="image-logo" />
                <Typography
                  fontSize={{
                    lg: 20,
                    md: 20,
                    sm: 15,
                    xs: 10,
                  }}
                >
                  <h4 className="why-us-card-text1">{item.name}</h4>
                </Typography>

                <Typography
                  fontSize={{
                    md: 15,
                    sm: 10,
                    xs: 5,
                  }}
                >
                  <p className="why-us-card-text2">{item.description}</p>
                </Typography>
                {/* <div> */}
                <p className="para">
                  <span className="price">Rs {item.price}</span>{" "}
                  <span className="total-price">Rs {item.totalprice}</span>{" "}
                  <span className="price-discount">({item.discount}% off)</span>{" "}
                  <span className="shopping-cart">
                    <ShoppingCartIcon />
                  </span>{" "}
                </p>
              </Link>
              </div>
              {/* <AccessAlarmIcon/> */}
              {/* </div> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Newproducts;
