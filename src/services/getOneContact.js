import http from "./httpService";

const getOneContact = (id) => {
  return http.get(`/contacts/${id}`);
};

export default getOneContact;
