import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component { 
    state = {
  name: '',
  number: ''
    }

    changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    console.log(name, number);
    // if (this.props.contacts.find(contact => contact.name === this.state.name)) {
    //   window.alert(`Contact ${this.state.name} is already in contacts`);
    //   return;
    // }
    this.props.onSubmit({ name, number, id: nanoid(), });
    this.reset();
  };
    reset = () => {
        this.setState({ name: '', number: '' });
}


render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name<input
  onChange={this.changeHandler}
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
        /></label>
          <label>Number<input
  onChange={this.changeHandler}
  type="tel"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/></label>
        
        <button type="submit">Add contact</button>
        </form>
      </div>
    );
  };
    
}

// ContactForm.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// //   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
// };