import PropTypes from 'prop-types';
import { Stats, StatsLi, Item, Btn } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Stats>
    {contacts.map(({ id, name, number }) => (
      <StatsLi key={id}>
        <Item>{name}:</Item>
        <Item>{number}</Item>
        <Btn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Btn>
      </StatsLi>
    ))}
  </Stats>
);

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
