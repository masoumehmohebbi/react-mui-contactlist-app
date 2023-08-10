import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import SideNav from "../components/SideNav";
import { InputBase, Typography } from "@mui/material";
import Searchh from "../components/search";
import getContacts from "../services/getContactsService";

// Search Box
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: "#a3e635",
  border: "1px solid #84cc16",
  "&:hover": {
    backgroundColor: "#a3e635",
    border: "2px solid #84cc16",
  },
  marginLeft: 0,
  //   width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto",
    // width: "auto",
    width: "40rem",
    height: "4rem",
    marginTop: "1rem",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const SearchContact = ({
  contacts,
  setContacts,
  allContacts,
  setallContacts,
  deleteContactHandler,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredTerm, setFilteredTerm] = React.useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value !== "") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join("")
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setFilteredTerm(filteredContacts);
      setFilteredTerm(filteredContacts);
    } else {
      setFilteredTerm(allContacts);
    }
  };
  React.useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setFilteredTerm(data);

      // setallContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  if (searchTerm !== "")
    return (
      <>
        {/* <ContactList contacts={filteredTerm} setContacts={setFilteredTerm} /> */}

        <Box sx={{ display: "flex" }}>
          <SideNav />

          <Box my={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Search
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#f0fdf4",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={searchTerm}
                onChange={searchHandler}
                placeholder="Type here to search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Searchh
              filteredTerm={filteredTerm}
              setFilteredTerm={setFilteredTerm}
              contacts={contacts}
              deleteContactHandler={deleteContactHandler}
            />
          </Box>
        </Box>
      </>
    );
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box my={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Search
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#f0fdf4",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={searchTerm}
            onChange={searchHandler}
            placeholder="Type here to search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Typography
          sx={{
            width: "100%",
            marginTop: "6rem",
            fontSize: "25px",
            fontWeight: "600",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          there is no contact founded!
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchContact;
