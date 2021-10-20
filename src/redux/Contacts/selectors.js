export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getVisibleList = ({ filterValue, contactList }) => {
  return contactList?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
  );
};
