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
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../supabase";
import Swal from "sweetalert2";
import getOneContact from "../services/getOneContact";
import updateContact from "../services/updateContact";

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
const StyledInputBase = styled(MuiTelInput)(({ theme }) => ({
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
const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4ade80 ",
  color: "#052e16",
  padding: "12px 5px",
  width: "15rem",
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

export default function EditContact() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [value, setValue] = useState("");

  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    gender: "female",
    relationship: "",
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
      await updateContact(id, contact);
      supabase.from("contactlist").select("*").eq("id", id);

      setContact({
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        gender: "female",
        relationship: "",
      });
      setValue("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(id);

        setContact({
          firstname: data[0].firstname,
          lastname: data[0].lastname,
          phonenumber: data[0].phonenumber,
          email: data[0].email,
          gender: data[0].gender,
          relationship: data[0].relationship,
        });
        let num = data[0].phonenumber.toString();
        setValue(num);
      } catch (error) {
        console.log(error);
      }
    };
    localFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: "flex", fontSize: "35px" }}>
      <SideNav />
      <Box
        my={7}
        component="main"
        sx={{ flexGrow: 1, p: 3, marginY: { xs: "100px", sm: "65px" } }}
      >
        <FormControl
          sx={{
            width: { xs: "100%", sm: "50%" },
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
            Update Contact
          </ColorButton>
        </FormControl>
      </Box>
    </Box>
  );
}
