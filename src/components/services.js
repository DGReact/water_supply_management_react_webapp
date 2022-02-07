import React from 'react';
import Grid from '@mui/material/Grid';
import "../Components-css/Base.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function services() {
  return  <div>
      <Grid container spacing={2} className='jumbotron' sx={{ mt: 2, mb:2 }}>
  <Grid item xs={12} md={7} lg ={6}>
<img src="../Image/delievery-boy.png" alt="not found" className='image'/>
  </Grid>
  <Grid item xs={12} md={5} lg={6} className='Text'>

<center>
    <h1>Our Services</h1> 


<Button variant="outlined" size="large" className = "button">Home Delievery</Button> <br/>
    <Button variant="outlined" size="large" className = "button">Marriage Party</Button><br/>
    <Button variant="outlined" size="large" className = "button">Weeding Party</Button><br/>
  <Button variant="outlined" size="large" className = "button">Annual Functions</Button><br/>
  <Button variant="outlined" size="large" className = "button">Birthday Party</Button><br/>
  <Button variant="outlined" size="large" className = "button">School Functions</Button><br/>
  <Button variant="outlined" size="large" className = "button">Events & Functions</Button><br/>
  <Button variant="outlined" size="large" className = "button">Wholesale & Retail</Button> <br/>
  <Button variant="contained" color="success" size="large" className='button-lg'>
  Book Now
</Button>
  </center>
</Grid>


  </Grid>
  </div>;
}

export default services;
