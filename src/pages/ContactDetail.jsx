import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SideNav from "../components/SideNav";
import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ContactDetail() {
  const { state } = useLocation();
  const { firstName, lastName, email, gender } = state.contact;

  return (
    <Box sx={{ display: "flex", fontSize: "35px" }}>
      <SideNav />
      <Box my={7} component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#a7f3d0" }}>
                <TableCell sx={{ fontWeight: "900", fontSize: "17px" }}>
                  The Details of {firstName} Contact!
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  align="left"
                >
                  First Name:
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  align="left"
                >
                  {firstName}{" "}
                </TableCell>
              </TableRow>
              <TableRow sx={{ bgcolor: "#ecfdf5" }}>
                <TableCell
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  align="left"
                >
                  Last Name:
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  align="left"
                >
                  {lastName}{" "}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  align="left"
                >
                  Email:
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  align="left"
                >
                  {email}
                </TableCell>
              </TableRow>
              <TableRow sx={{ bgcolor: "#ecfdf5" }}>
                <TableCell
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  align="left"
                >
                  The Gender:
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  align="left"
                >
                  {gender}{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
