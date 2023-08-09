import http from "./httpService";

const updateContact = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};

export default updateContact;
