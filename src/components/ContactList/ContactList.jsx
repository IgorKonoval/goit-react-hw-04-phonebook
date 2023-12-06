import ContactItem from 'components/ListItem/ListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteBut }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={onDeleteBut}
          />
        );
      })}
    </List>
  );
};
