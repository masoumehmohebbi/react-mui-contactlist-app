import "./App.css";
import { Box } from "@mui/material";
import Layout from "../layout/layout";
import ContactList from "../pages/ContactList";
import { Route, Routes } from "react-router-dom";
import AddContact from "../pages/AddContact";
import ContactDetail from "../pages/ContactDetail";
import EditContact from "../pages/EditContact";
import SearchContact from "../pages/SearchContact";
import { useEffect, useState } from "react";
import getContacts from "../services/getContactsService";
import deleteContact from "../services/deleteContactsService";

function App() {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setallContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);

      setallContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, [contacts]);

  const deleteContactHandler = async (contactId) => {
    try {
      await deleteContact(contactId);
      const filteredContacts = contacts.filter((c) => c.id !== contactId);
      setContacts(filteredContacts);
    } catch (error) {}
  };
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Layout>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                deleteContactHandler={deleteContactHandler}
                contacts={contacts}
                setContacts={setContacts}
                allContacts={allContacts}
                setallContacts={setallContacts}
              />
            }
          />
          <Route
            path="*"
            exact
            element={
              <ContactList
                contacts={contacts}
                setContacts={setContacts}
                allContacts={allContacts}
                setallContacts={setallContacts}
              />
            }
          />
          <Route path="/add" element={<AddContact />} />
          <Route path="/user/:id" element={<ContactDetail />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route
            path="/search"
            element={
              <SearchContact
                contacts={contacts}
                setContacts={setContacts}
                allContacts={allContacts}
                setallContacts={setallContacts}
              />
            }
          />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
