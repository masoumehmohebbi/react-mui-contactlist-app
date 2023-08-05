import React from "react";
import { Box } from "@mui/material";
import SideNav from "../components/SideNav";

const AddContact = () => {
  return (
    <Box sx={{ display: "flex", fontSize: "35px" }}>
      <SideNav />
      <Box mt={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
        add
      </Box>
    </Box>
  );
};

export default AddContact;
