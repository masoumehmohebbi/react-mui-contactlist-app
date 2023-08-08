import http from "./httpService";

const addOneContact = (data) => {
  return http.post(`/contacts`, data);
};

export default addOneContact;
