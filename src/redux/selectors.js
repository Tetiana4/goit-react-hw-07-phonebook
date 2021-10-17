export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getVisibleList = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalisedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalisedFilter),
  );
};
