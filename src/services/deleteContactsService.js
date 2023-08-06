import http from "./httpService";

const deleteContact = (id) => {
  return http.delete(`/contacts/${id}`);
};

export default deleteContact;
