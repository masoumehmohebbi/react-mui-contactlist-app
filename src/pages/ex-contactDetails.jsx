import React from "react";
import { Box, Typography } from "@mui/material";
import SideNav from "../components/SideNav";
import { useLocation } from "react-router-dom";

const ContactDetail = () => {
  const { state } = useLocation();
  const { firstName, lastName, email, gender } = state.contact;
  return (
    <Box sx={{ display: "flex", fontSize: "35px" }}>
      <SideNav />
      <Box my={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Typography component="span">{firstName}</Typography>
          <Typography component="span">{lastName}</Typography>
          <Typography component="span">{email}</Typography>
          <Typography component="span">{gender}</Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactDetail;
