import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Container } from './Profile.styled';
import { nanoid } from 'nanoid';
class ContactForm extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handelChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label htmlFor={this.nameId}>Name</label>
          <div>
            <input
              type="text"
              name="name"
              id={this.nameId}
              value={this.state.name}
              onChange={this.handelChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <label htmlFor={this.numberId}>Number</label>
          <div>
            <input
              type="tel"
              name="number"
              id={this.numberId}
              value={this.state.number}
              onChange={this.handelChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
