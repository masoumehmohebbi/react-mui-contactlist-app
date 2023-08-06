import http from "./httpService";

const getContacts = () => {
  return http.get("/contacts");
};

export default getContacts;
