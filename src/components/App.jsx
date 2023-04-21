import React, { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
 filter: '',
}

  formSubmitHandler = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  ChangeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }


   onDelete = id => {
    const { contacts } = this.state;
    const updatesContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatesContacts });
  };


  render() {
     const { contacts, filter } = this.state;
     
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHandler}
          contacts={this.state.contacts}></ContactForm>
  
        <Filter value={filter}
          onChange={this.ChangeFilter} />
        
         <ContactList items={visibleContacts}
          onClick={this.onDelete} />
      </>
   )
  };
}