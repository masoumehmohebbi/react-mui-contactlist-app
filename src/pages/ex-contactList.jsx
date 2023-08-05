import React from "react";
import { Box } from "@mui/material";
import SideNav from "../components/SideNav";
// import Menu from "../components/NavBar";

const ContactList = () => {
  return (
    <>
      {/* <Menu /> */}
      <Box sx={{ display: "flex", fontSize: "35px" }}>
        <SideNav />
        <Box mt={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
          contactList
        </Box>
      </Box>
    </>
  );
};

export default ContactList;
