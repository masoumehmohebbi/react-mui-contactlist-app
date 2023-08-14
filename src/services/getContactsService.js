import supabase from "../supabase";

const getContacts = () => {
  return supabase.from("contactlist").select("*");
};

export default getContacts;
