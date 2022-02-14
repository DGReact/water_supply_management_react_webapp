import React from "react";
import { Container, Button } from "@material-ui/core";
import "../Components-css/Base.css";
import { newproduct } from "../constants/data";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet, Link } from "react-router-dom";

function Newproducts() {
  return (
    <div>
      <Container>
        <h1 className="custom-text1">New Products</h1>

        <Grid container spacing={2}>
          {newproduct.map((item) => (
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              sx={{ boxShadow: 3, p: 3 }}
              className="card"
            >
               <Link to="/product-detail" className='link'>
              <img src={item.url} alt="not found" className="image-logo" />
              <h4 className="c-head">{item.name}</h4>
              <p className="des">{item.description}</p>
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
