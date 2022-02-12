import React from "react";
import "../Components-css/Base.css";
import { whyus } from "../constants/data";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Container } from "@material-ui/core";

function Whyus() {
  return (
    <div>
      <Container>
        <h1 className="custom-text">WHY CHOOSE US?</h1>
        <Grid container >
          {whyus.map((item) => (
            <Grid item xs={3} md={3} lg={3}  className="card ">
              <div className="container-item">
              <img src={item.url} alt="not found" className = "image-logo"/>
              <Typography
                fontSize={{
                  lg: 30,
                  md: 20,
                  sm: 15,
                  xs: 10
                }}>
              <h4 className="c-head">{item.name}</h4>
              </Typography>
              <Typography
                fontSize={{
                  lg: 20,
                  md: 15,
                  sm: 10,
                  xs: 5
                }}>
                <p>{item.description}</p>
              </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Whyus;
