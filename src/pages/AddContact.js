import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SideNav from "../components/SideNav";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export default function AddContact() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
      borderColor: "#E0E3E7",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 1,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 4,
      borderColor: "green",
      padding: "4px !important",
    },
  });

  const StyledInputBase = styled(MuiTelInput)(({ theme }) => ({
    // color: "inherit",
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 4,
      borderColor: "green",
      padding: "4px !important",
    },
  }));
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "green",
    padding: "12px 5px",
    width: "10rem",
    fontSize: "15px",
    fontWeight: "600",
    display: "flex",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "red",
    },
  }));

  return (
    <Box sx={{ display: "flex", fontSize: "35px" }}>
      <SideNav />
      <Box my={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
        <FormControl
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            marginX: "auto",
            gap: "30px",
            marginTop: "10px",
          }}
        >
          <ValidationTextField label="First Name" />
          <ValidationTextField label="Last Name" />
          <StyledInputBase
            label="Phone Number"
            fullWidth
            value={value}
            onChange={handleChange}
          />
          <ValidationTextField
            label="Email Address"
            aria-describedby="my-helper-text"
          />
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "30px" }}
          >
            <FormLabel id="demo-radio-buttons-group-label">Gender:</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  direction: "rtl",
                }}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio color="success" />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio color="success" />}
                  label="Female"
                />
              </Typography>
            </RadioGroup>
          </Typography>

          <ValidationTextField
            id="outlined-multiline-static"
            label="What's your relationship"
            defaultValue="ex: friend"
          />
          <ColorButton variant="contained">Add Contact </ColorButton>
        </FormControl>
      </Box>
    </Box>
  );
}
