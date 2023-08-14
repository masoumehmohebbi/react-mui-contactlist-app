import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import {
  AccessTimeFilled,
  Edit,
  Female,
  Male,
  RemoveRedEye,
  RestoreFromTrash,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import deleteContact from "../services/deleteContactsService";

export default function Searchh({
  filteredTerm,
  setFilteredTerm,
  deleteContactHandler,
}) {
  const navigate = useNavigate();

  const deleteOneContactHandler = async (contactId) => {
    try {
      await deleteContact(contactId);
      const filteredContacts = filteredTerm.filter((c) => c.id !== contactId);
      setFilteredTerm(filteredContacts);
    } catch (error) {}
    deleteContactHandler(contactId);
  };
  if (filteredTerm.length === 0) {
    return (
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
    );
  }
  return (
    <Grid container spacing={2} sx={{ my: "30px" }}>
      {filteredTerm ? (
        filteredTerm.map((contact) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={contact.id}>
            <Card
              sx={{
                maxWidth: 197,
                marginX: "auto",
              }}
            >
              <CardMedia
                sx={{
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
                  <Typography sx={{ color: "#65a30d", fontWeight: "600" }}>
                    {contact.time}
                  </Typography>
                </Typography>
                <Typography
                  sx={{ display: "flex", gap: "9px" }}
                  gutterBottom
                  variant="h5"
                >
                  <Typography
                    component="span"
                    sx={{ fontWeight: "800", mt: "11px", color: "#14532d" }}
                  >
                    {contact.firstname}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "800", mt: "11px", color: "#14532d" }}
                  >
                    {contact.lastname}
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
                <Typography>
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
                      onClick={() => navigate(`/edit/${contact.id}`)}
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
        <Typography sx={{ width: "100%", bgcolor: "red" }}>
          No Contacts Yet!
        </Typography>
      )}
    </Grid>
  );
}
