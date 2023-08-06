import http from "./httpService";

const addOneContact = (data) => {
  return http.put(`/contacts`, data);
};

export default addOneContact;
