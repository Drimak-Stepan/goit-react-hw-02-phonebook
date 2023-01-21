import PropTypes from 'prop-types';
import { Stats, StatsLi, Item, Btn } from './ContactList.styled';

const ContactList = ({ contactsList, onDeleteContact }) => (
  <Stats>
    {contactsList.map(({ id, name, number }) => (
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
  contactsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
