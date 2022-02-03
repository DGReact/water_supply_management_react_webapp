import React from "react";
import "../Components-css/Base.css";
import { whyus } from "../constants/data";
import Grid from "@mui/material/Grid";
import { Container } from "@material-ui/core";

function Whyus() {
  return (
    <div>
      <Container>
        <h1 className="whyus">WHY CHOOSE US?</h1>

        <Grid container spacing={2}>
          {whyus.map((item) => (
            <Grid item xs={3}>
              <img src={item.url} alt="not found" className = "image-logo"/>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Whyus;
