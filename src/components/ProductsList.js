import React from 'react';

import { Container, Button } from "@material-ui/core";
import "../Components-css/Base.css";
import { totalproduct } from "../constants/data";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductsList() {
  return <div>
    <center>
<h1 className='heading-product'>Our Products</h1>
</center>
<Container>
        <Grid container spacing={2}>
          {totalproduct.map((item) => (
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              sx={{ boxShadow: 3, p: 3 }}
              className="card"
            >
              <img src={item.url} alt="not found" className="image-logo" />
              <h4 className="c-head">{item.name}</h4>
              <p>{item.description}</p>
              {/* <div> */}
              <p className="para">
                <span className="price">Rs {item.price}</span>{" "}
                <span className="total-price">Rs {item.totalprice}</span>{" "}
                <span className="price-discount">({item.discount}% off)</span>{" "}
                <span className="shopping-cart">
                  <ShoppingCartIcon />
                </span>{" "}
              </p>
            </Grid>
          ))}
        </Grid>
      </Container>
  </div>;
}

export default ProductsList;
