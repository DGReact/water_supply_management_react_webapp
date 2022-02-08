import React from "react";
import TextField from "@mui/material/TextField";
import { Container, Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const service = [
  {
    value: "Daily",
    label: "Daily",
  },
  {
    value: "weekly",
    label: "weekly",
  },
  {
    value: "monthly",
    label: "monthly",
  },
];

export default function Form() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [services, setService] = React.useState("Daily");

  const handleService = (event) => {
    setService(event.target.value);
  };

  return (
    <div>
      {/* <center> */}
      <Container>
        <h1 className="heading-form">Fill Out this form to get our Service</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "80%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Your Name"
              defaultValue="write your name here..."
            />
            <TextField
              required
              id="outlined-required"
              label="Your Phone"
              defaultValue="write your phone no here..."
            />
            <TextField
              required
              id="outlined-required"
              label="Your Email"
              defaultValue="write your email here..."
            />
            <TextField
              required
              id="outlined-required"
              label="Your City"
              defaultValue="write your city name here..."
            />
            <TextField
              required
              id="outlined-required"
              label="Full address"
              defaultValue="write your address here..."
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Bottle/Container type"
              value={currency}
              onChange={handleService}
              helperText="Please select your weight"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="No of Bottles"
              defaultValue="No of Bottles"
            />

            <TextField
              id="outlined-select-currency"
              select
              label="Service type"
              value={services}
              onChange={handleChange}
              helperText="Please select your service"
            >
              {service.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="Your message"
              defaultValue="Write your message here.."
            />
          </div>
        </Box>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className="button-service"
          >
           Submit
          </Button>
      </Container>
      {/* </center> */}
    </div>
  );
}
