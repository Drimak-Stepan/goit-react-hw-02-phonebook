import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Container } from './Profile.styled';
import { nanoid } from 'nanoid';
class Filter extends Component {
  filterId = nanoid();

  render() {
    return (
      <div>
        <label htmlFor={this.filterId}>Find contacts by name</label>
        <div>
          <input
            type="text"
            name="filter"
            id={this.filterId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
      </div>
    );
  }
}

export default Filter;
