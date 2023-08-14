import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SideNav from "../components/SideNav";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import addOneContact from "../services/addContactService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ValidationTextField = styled(TextField)({
  backgroundColor: "#dcfce7",
  "& input:valid + fieldset": {
    borderColor: "#bbf7d0",
    borderWidth: 1,
  },
  "& input:valid:hover + fieldset": {
    borderColor: "#bbf7d0",
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
const StyledInputBase = styled(MuiTelInput)(() => ({
  backgroundColor: "#dcfce7",

  "& input:valid + fieldset": {
    borderColor: "#bbf7d0",
    borderWidth: 1,
  },
  "& input:valid:hover + fieldset": {
    borderColor: "#bbf7d0",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 4,
    borderColor: "green",
    padding: "4px !important",
  },
}));
const ColorButton = styled(Button)(() => ({
  backgroundColor: "#4ade80 ",
  color: "#052e16",
  padding: "12px 5px",
  width: "10rem",
  fontSize: "15px",
  fontWeight: "600",
  display: "flex",
  alignSelf: "center",
  "&:hover": {
    backgroundColor: "#22c55e",
  },
}));
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,

  customClass: {
    popup: "popup-class",
  },

  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default function AddContact({ contacts }) {
  const navigate = useNavigate();

  localStorage.clear();
  const [time] = useState(localStorage.getItem("time") || Date.now());
  const iranDate = new Date(time);
  const date = iranDate.toLocaleString("en-US", { timeZone: "Asia/Tehran" });

  const clock = iranDate.toLocaleString("default", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  React.useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

  const [value, setValue] = useState("");
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    gender: "female",
    relationship: "",
    time: clock,
    fullTime: date,
  });

  const handleChange = (newValue) => {
    setValue(newValue);
    const updatedContact = { ...contact };
    updatedContact.phonenumber = newValue;
    setContact(updatedContact);
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    if (
      !contact.firstname ||
      !contact.lastname ||
      !contact.phonenumber ||
      !contact.email ||
      !contact.relationship
    ) {
      Toast.fire({
        icon: "error",
        title: "All Filds are mandatory!",
      });
      return;
    }
    try {
      await addOneContact({
        firstname: contact.firstname,
        lastname: contact.lastname,
        phonenumber: contact.phonenumber,
        email: contact.email,
        gender: contact.gender,
        relationship: contact.relationship,
        time: contact.time,
        fullTime: contact.fullTime,
      });

      setContact({
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        gender: "female",
        relationship: "",
        time: "",
        fullTime: "",
      });
      setValue("");
      navigate("/");
      Toast.fire({
        icon: "success",
        title: "New Contact Added Successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: "flex", fontSize: "35px" }}>
      <SideNav contacts={contacts} />
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
          <ValidationTextField
            label="First Name"
            name="firstname"
            value={contact.firstname}
            onChange={changeHandler}
          />
          <ValidationTextField
            label="Last Name"
            name="lastname"
            value={contact.lastname}
            onChange={changeHandler}
          />
          <StyledInputBase
            label="Phone Number"
            value={value}
            onChange={handleChange}
          />
          <ValidationTextField
            name="email"
            value={contact.email}
            onChange={changeHandler}
            label="Email Address"
            aria-describedby="my-helper-text"
          />
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "30px" }}
          >
            <Typography
              sx={{ fontWeight: "700", color: "#052e16" }}
              id="demo-radio-buttons-group-label"
            >
              Gender:
            </Typography>
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
                  name="gender"
                  control={<Radio color="success" />}
                  label="Male"
                  onChange={changeHandler}
                />
                <FormControlLabel
                  value="female"
                  name="gender"
                  control={<Radio color="success" />}
                  label="Female"
                  onChange={changeHandler}
                />
              </Typography>
            </RadioGroup>
          </Typography>
          <ValidationTextField
            name="relationship"
            value={contact.relationship}
            onChange={changeHandler}
            id="outlined-multiline-static"
            label="What's your relationship"
            defaultValue="ex: friend"
          />
          <ColorButton variant="contained" onClick={submitHandler}>
            Add Contact
          </ColorButton>
        </FormControl>
      </Box>
    </Box>
  );
}
