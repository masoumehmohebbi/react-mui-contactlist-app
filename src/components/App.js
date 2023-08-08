import "./App.css";
import { Box } from "@mui/material";
import Layout from "../layout/layout";
import ContactList from "../pages/ContactList";
import { Route, Routes } from "react-router-dom";
import AddContact from "../pages/AddContact";
import ContactDetail from "../pages/ContactDetail";
import EditContact from "../pages/EditContact";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Layout>
        <Routes>
          <Route path="/" exact element={<ContactList />} />
          <Route path="*" exact element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/user/:id" element={<ContactDetail />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
