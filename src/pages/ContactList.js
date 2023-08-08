import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Tooltip } from "@mui/material";
import SideNav from "../components/SideNav";
import Grid from "@mui/material/Unstable_Grid2";
import {
  AccessTimeFilled,
  Edit,
  Female,
  Male,
  RemoveRedEye,
  RestoreFromTrash,
} from "@mui/icons-material";

import { useState, useEffect } from "react";
import getContacts from "../services/getContactsService";
import deleteContact from "../services/deleteContactsService";
import { useNavigate } from "react-router-dom";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  const deleteOneContactHandler = async (contactId) => {
    try {
      await deleteContact(contactId);
      const filteredContacts = contacts.filter((c) => c.id !== contactId);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box my={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          {contacts ? (
            contacts.map((contact) => (
              <Grid xs={12} sm={6} md={4} lg={3} key={contact.id}>
                <Card
                  sx={{
                    maxWidth: 197,
                    marginX: "auto",
                  }}
                >
                  <CardMedia
                    sx={{
                      // height: 160,
                      height: 110,
                      backgroundPositionY: "1px",
                      width: "95px",
                      margin: "auto",
                    }}
                    image="https://th.bing.com/th/id/R.d9d19204023a46ff71baecd91ff5420c?rik=rVs%2f4D7ex%2fEbSw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2011%2f10%2fwindows-8-default-user-icon_71046.png&ehk=wRV87OUeTL%2f2EOTxy%2fsRnjiJRFLnpFqFySsG972evMA%3d&risl=&pid=ImgRaw&r=0"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: "5px",
                      }}
                    >
                      <AccessTimeFilled
                        sx={{ color: "#84cc16", fontSize: "18px" }}
                      />
                      <Typography
                        component="span"
                        sx={{ color: "#65a30d", fontWeight: "600" }}
                      >
                        {new Date().toLocaleString() + ""}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{ display: "flex", gap: "9px" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      <Typography
                        component="span"
                        sx={{ fontWeight: "800", mt: "11px", color: "#14532d" }}
                      >
                        {contact.firstName}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{ fontWeight: "800", mt: "11px", color: "#14532d" }}
                      >
                        {contact.lastName}
                      </Typography>
                    </Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "between",
                      width: "100%",
                      gap: "1px",
                    }}
                  >
                    <Typography component="div">
                      {contact.gender === "female" ? (
                        <Tooltip title="Female">
                          <Female sx={{ color: "#dc2626", fontSize: "24px" }} />
                        </Tooltip>
                      ) : (
                        <Tooltip title="Male">
                          <Male sx={{ color: "#2563eb", fontSize: "24px" }} />
                        </Tooltip>
                      )}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                        gap: "6px",
                      }}
                    >
                      <Tooltip title="Detail">
                        <RemoveRedEye
                          onClick={() =>
                            navigate(`/user/${contact.id}`, {
                              state: { contact: contact },
                            })
                          }
                          sx={{
                            "&:hover": {
                              color: "#166534",
                            },
                            cursor: "pointer",
                            color: "#4f46e5",
                            fontSize: "19px",
                          }}
                        />
                      </Tooltip>

                      <Tooltip title="Edit">
                        <Edit
                          sx={{
                            "&:hover": {
                              color: "#166534",
                            },
                            cursor: "pointer",
                            color: "#16a34a",
                            fontSize: "19px",
                          }}
                        />
                      </Tooltip>

                      <Tooltip
                        title="Delete"
                        onClick={() => deleteOneContactHandler(contact.id)}
                      >
                        <RestoreFromTrash
                          sx={{
                            "&:hover": {
                              color: "#166534",
                            },
                            cursor: "pointer",
                            color: "#e11d48",
                            fontSize: "19px",
                          }}
                        />
                      </Tooltip>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography sx={{ width: "100%", bgcolor: "red" }} component="span">
              No Contacts Yet!
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
