import supabase from "../supabase";
// import http from "./httpService";

const getOneContact = (id) => {
  // return http.get(`/contacts/${id}`);
  return supabase.from("contactlist").select("*").filter("id", "eq", id);
};

export default getOneContact;
