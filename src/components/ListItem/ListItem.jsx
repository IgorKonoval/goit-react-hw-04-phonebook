import { ListItem, Button } from './ListItem.styled';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactItem;
