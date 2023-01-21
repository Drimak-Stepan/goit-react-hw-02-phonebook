import PropTypes from 'prop-types';
import { Block, Label, Input } from './Filter.styled';
import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <Block>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <div>
        <Input
          type="text"
          name="filter"
          id={filterId}
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    </Block>
  );
};

export default Filter;
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
