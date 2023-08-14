import supabase from "../supabase";

const addOneContact = (data) => {
  return supabase.from("contactlist").insert([data]).select();
};

export default addOneContact;
