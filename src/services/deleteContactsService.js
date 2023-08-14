import supabase from "../supabase";

const deleteContact = (id) => {
  return supabase.from("contactlist").delete().eq("id", id);
};

export default deleteContact;
