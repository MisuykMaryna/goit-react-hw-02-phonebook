import React, { Component } from 'react';


export class ContactForm extends Component { 
    state = {
  name: '',
  number: ''
    }

   handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };


handleSubmit = e => {
    e.preventDefault();
  const { name, number } = this.state;
    const {contacts} = this.props;
    console.log(contacts);
    if (contacts.find(contact => contact.name === name)) {
      window.alert(`Contact ${name} is already in contacts`);
      return;
    }
    this.props.onSubmit({ name, number });
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
  onChange={this.handelChange}
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
        /></label>
          <label>Number<input
  onChange={this.handelChange}
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