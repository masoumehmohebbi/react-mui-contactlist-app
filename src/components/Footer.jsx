import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { PersonAdd } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      sx={{
        top: "auto",
        zIndex: "80",
        bottom: 0,
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "50px",
        bgcolor: "#dcfce7",
        display: { xs: "flex", md: "none" },
      }}
    >
      <BottomNavigation
        sx={{ bgcolor: "#16a34a", width: "100%" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/search")}
          label="Search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/add")}
          label="Contact Add"
          icon={<PersonAdd />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/")}
          label="Contact List"
          icon={<MenuIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
