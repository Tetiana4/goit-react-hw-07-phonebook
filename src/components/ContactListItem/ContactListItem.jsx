// import React from 'react';
// import PropTypes from 'prop-types';
// import { List, ListItem, Button } from './ContactList.styled';

// const ContactList = ({ contacts, onDelete, deleting }) => {

//   return (
//     <List>
//       {contacts.map(({ id, name, number }) => (
//         <ListItem key={id}>
//           {name}: {number}
//           <Button onClick={() => onDelete(id)}>
//             {deleting ? 'Deleting...' : 'Delete'}
//           </Button>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default ContactList;

// ContactList.propeTypes = {
//   contacts: PropTypes.array,
//   onDelete: PropTypes.func,
// };
