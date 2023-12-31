import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { PersonAdd } from "@mui/icons-material";
import { motion } from "framer-motion";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,

  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#16a34a",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,

    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNav({ contacts, filteredTerm }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              width: "100%",
              paddingY: "10px",
              alignItems: { sm: "center" },
            }}
          >
            <Typography
              sx={{
                display: { xs: "none", sm: "flex" },
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#1e293b",
                textShadow: "1px 2px 1px #6ee7b7",
              }}
            >
              There are
              <Typography
                sx={{
                  marginX: "5px",
                  width: "21px",
                  height: "21px",
                  bgcolor: "#6ee7b7",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {contacts
                  ? contacts.length
                  : filteredTerm
                  ? filteredTerm.length
                  : "0"}
              </Typography>
              Contact!
            </Typography>
            {/* first row */}
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "100%", sm: "59%", md: "59%", lg: "62%" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "25px", lg: "28px" },
                  textTransform: "uppercase",
                  fontWeight: "600",
                  color: "#1e293b",
                  textShadow: "1px 2px 1px #6ee7b7",
                }}
              >
                Contact list
              </Typography>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: "300",
                }}
              >
                <Typography
                  sx={{
                    bgcolor: "#4ade80",
                    borderRadius: "50%",
                    width: "42px",
                    height: "40px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Link
                    to={"/add"}
                    sx={{
                      height: "41px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Tooltip title="Add Contact">
                      <PersonAdd sx={{ color: "#166534", fontSize: "30px" }} />
                    </Tooltip>
                  </Link>
                </Typography>
              </motion.span>
            </Typography>
            {/* second row */}
            <Typography
              sx={{
                display: { xs: "flex", sm: "none" },
                fontWeight: "600",
                textTransform: "uppercase",
                paddingTop: "16px",
                color: "#1e293b",
                textShadow: "1px 3px 2px #6ee7b7",
              }}
            >
              There are
              <Typography
                sx={{
                  marginX: "5px",
                  width: "22px",
                  height: "22px",
                  bgcolor: "#6ee7b7",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // no
                }}
              >
                {contacts
                  ? contacts.length
                  : filteredTerm
                  ? filteredTerm.length
                  : "0"}
              </Typography>
              Contact!
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <DrawerHeader
          sx={{
            bgcolor: "#4ade80",
            display: "flex",
            flexDirection: "row-reverse",
            borderRight: "2px solid #86efac",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <AvatarGroup total={24}>
            <Avatar
              alt="Agnes Walker"
              src="https://i1.sndcdn.com/artworks-000560642937-oi6vbo-t500x500.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://th.bing.com/th/id/OIP.V7LHDa9FRUGCuhnvEOnQPgHaE8?pid=ImgDet&rs=1"
            />
            <Avatar
              alt="Remy Sharp"
              src="https://th.bing.com/th/id/R.aa0df66f952baca50f9a0143f824225e?rik=Q3Q7cpLD9DSThA&pid=ImgRaw&r=0"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://www.lastrada-doells.temporalweb.de/files/stradoell_theme/Daten/Schauspieler/lion_wasczyk/bilder_2020/Lion_neu_1.jpg"
            />
          </AvatarGroup>
        </DrawerHeader>

        <Divider sx={{ bgcolor: "#4ade80" }} />
        <List
          sx={{
            bgcolor: "#4ade80",
            height: "100%",
            borderRight: "2px solid #86efac",
          }}
        >
          <Link to={"/search"}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SearchIcon sx={{ fontSize: "32px", color: "#166534" }} />
                </ListItemIcon>
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    originX: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: "300",
                  }}
                >
                  <Typography
                    sx={{
                      opacity: open ? 1 : 0,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#f0fdf4",
                    }}
                  >
                    Search Contact
                  </Typography>
                </motion.span>
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />

          <Link to={"/"}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AssignmentIcon sx={{ fontSize: "32px", color: "#166534" }} />
                </ListItemIcon>
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    originX: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: "300",
                  }}
                >
                  <Typography
                    sx={{
                      opacity: open ? 1 : 0,
                      color: "#f0fdf4",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Contacts list
                  </Typography>
                </motion.span>
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/add"}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* <InboxIcon sx={{ fontSize: "32px", color: "#166534" }} /> */}
                  <PersonAdd sx={{ fontSize: "32px", color: "#166534" }} />
                </ListItemIcon>
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    originX: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: "300",
                  }}
                >
                  <Typography
                    sx={{
                      opacity: open ? 1 : 0,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#f0fdf4",
                    }}
                  >
                    Add Contact
                  </Typography>
                </motion.span>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
