import supabase from "../supabase";
const updateContact = (id, contact) => {
  return supabase
    .from("contactlist")
    .update({
      firstname: contact.firstname,
      lastname: contact.lastname,
      phonenumber: contact.phonenumber,
      email: contact.email,
      gender: contact.gender,
      relationship: contact.relationship,
    })
    .eq("id", id);
};

export default updateContact;
