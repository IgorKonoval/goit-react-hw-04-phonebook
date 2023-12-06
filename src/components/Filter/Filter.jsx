import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      ></Input>
    </Label>
  );
};

export default Filter;
