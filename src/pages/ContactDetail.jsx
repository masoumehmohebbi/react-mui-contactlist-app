import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SideNav from "../components/SideNav";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ContactDetail() {
  const { state } = useLocation();
  const {
    firstname,
    lastname,
    email,
    gender,
    phonenumber,
    relationship,
    fullTime,
  } = state.contact;

  return (
    <Box sx={{ display: "flex", fontSize: "35px" }}>
      <SideNav />
      <Box
        my={7}
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginY: { xs: "100px", sm: "65px" },
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            wordBreak: "break-word",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#a7f3d0" }}>
                <TableCell
                  sx={{
                    fontWeight: "900",
                    fontSize: { xs: "13px", sm: "17px" },
                  }}
                >
                  The Details of {firstname} Contact!
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  First Name:
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  {firstname}{" "}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  bgcolor: "#ecfdf5",
                  fontSize: { xs: "13px", sm: "16px" },
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  Last Name:
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  {lastname}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  Email:
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  {email}
                </TableCell>
              </TableRow>
              <TableRow sx={{ bgcolor: "#ecfdf5" }}>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  The Gender:
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  {gender}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  Phone Number:
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  {phonenumber}
                </TableCell>
              </TableRow>
              <TableRow sx={{ bgcolor: "#ecfdf5" }}>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  What's the relationship?
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  {relationship}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  When Added?
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                  align="left"
                >
                  {fullTime}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
