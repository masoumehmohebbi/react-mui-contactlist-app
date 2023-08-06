import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      position="fixed"
      sx={{
        top: "auto",
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
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
