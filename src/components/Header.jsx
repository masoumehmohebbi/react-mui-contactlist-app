import React from "react";
import { Typography, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        xs={12}
        sx={{
          display: "flex",
          backgroundColor: "#e2e8f0",
          padding: "10px 5px",
          height: "180px",
        }}
      >
        <Box
          // component="span"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "50px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              fontSize: "35px",
              fontWeight: "600",
              color: "text-slate-800",
            }}
          >
            ContactList
          </Typography>

          <TextField
            label="type here to search"
            InputProps={{
              style: { borderRadius: "50px" },
            }}
          />
        </Box>
      </Grid>

      <Grid
        xs={2}
        sx={{
          height: "100vh",
          display: { xs: "none", md: "fixed" },
          bgcolor: "#4ade80",
        }}
      >
        Left-Menu
      </Grid>
    </Grid>
  );
};

export default Header;
