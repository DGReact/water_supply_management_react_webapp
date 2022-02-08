import React from 'react';
import "../Components-css/Base.css";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

function Servicesslider() {
  return <div>
 
  <center>
  <Grid container spacing={2} sx={{ mt: 2, mb:2 }} className="contain">
    <Grid item xs={2}></Grid>
  <Grid item xs={8} >
  <img src='../Image/water.png' alt = 'not found' className='image-slider'/>
  </Grid>
  <Grid item xs={2}></Grid>
  </Grid>
  
  <h1 className='whyus'>Our Services</h1>
  <Button variant="outlined" size="large" color='primary' className = "button-service">Home Delievery</Button> 
    <Button variant="outlined" size="large" color='primary' className = "button-service">Marriage Party</Button>
    <Button variant="outlined" size="large" color='primary' className = "button-service">Weeding Party</Button>
  <Button variant="outlined" size="large" color='primary' className = "button-service">Annual Functions</Button> <br/>
  <Button variant="outlined" size="large" color='primary' className = "button-service">Birthday Party</Button>
  <Button variant="outlined" size="large" color='primary' className = "button-service">School Functions</Button>
  <Button variant="outlined" size="large" color='primary' className = "button-service">Events & Functions</Button>
  <Button variant="outlined" size="large" color='primary' className = "button-service">Wholesale & Retail</Button>
  </center>

  </div>;
}

export default Servicesslider;
