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
  RemoveRedEye,
  RestoreFromTrash,
} from "@mui/icons-material";

export default function ContactList() {
  return (
    <Box sx={{ display: "flex", fontSize: "35px" }}>
      <SideNav />
      <Box mt={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={4} lg={3}>
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
                  sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <AccessTimeFilled />
                  8/3/2023
                </Typography>
                <Typography
                  sx={{ display: "flex", gap: "9px", fontWeight: "900" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <Typography component="span">Lizard</Typography>
                  <Typography component="span">Lizardy</Typography>
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  width: "100%",
                  gap: "1px",
                }}
              >
                <Tooltip title="Detail">
                  <RemoveRedEye
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

                <Tooltip title="Edit">
                  <Edit
                    title="edit"
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

                <Tooltip title="Delete">
                  <RestoreFromTrash
                    title="Detail"
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
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
