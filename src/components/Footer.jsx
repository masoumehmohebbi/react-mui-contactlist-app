import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      position="fixed"
      sx={{
        display: "flex",
        top: "auto",
        bottom: 0,
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "50px",
        bgcolor: "#dcfce7",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          fontSize: "20px",
          paddingY: "7px",
          fontWeight: "400",
          color: "text-slate-800",
        }}
      >
        Made By Masoume
      </Typography>
    </Box>
  );
};

export default Footer;
