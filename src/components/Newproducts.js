import React from 'react';
import { Container,Button } from "@material-ui/core";
import "../Components-css/Base.css";
import { newproduct } from "../constants/data";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Newproducts() {
  return <div>
     <Container>
        <h1 className="new-product">New Products</h1>

        <Grid container spacing={2} >
          {newproduct.map((item) => (
            <Grid item xs={12} md={3} lg={3} sx={{ boxShadow: 3, p:3 }} className="p-4">
              <img src={item.url} alt="not found" className = "image-logo"/>
              <h4 className="c-head">{item.name}</h4>
              <p>{item.description}</p> <br/>
              {/* <div> */}
              <p><span  className='price'>Rs {item.price}</span> <span  className='total-price'>Rs {item.totalprice}</span> <span className='price-discount'>({item.discount}% off)</span> <span className='shopping-cart'><ShoppingCartIcon/></span>  </p>
              {/* <AccessAlarmIcon/> */}
              {/* </div> */}
            </Grid>
          ))}
        </Grid>
      </Container>
  </div>;
}

export default Newproducts;
