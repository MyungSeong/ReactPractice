import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    phone: '',

    contact : [
      {
        id: 1,
        name: 'david',
        phone: '010-1234-5678'
      },
      {
        id: 2,
        name: 'kelly',
        phone: '010-1234-5678'
      },
      {
        id: 3,
        name: 'frank',
        phone: '010-1234-5678'
      },
      {
        id: 4,
        name: 'temp',
        phone: '010-1234-5678'
      }
    ]
  }

  /*constructor(props) {
    super(props);

    this.state = {
      contact : [
        {

        }
      ]
    }
  }*/

  /*
   * Delete Function
   */
  _handleRemoveContact = id => {
    const newContact = this.state.contact.filter(c => c.id !== id);
    console.log("newContact: " + newContact);
    this.setState({ contact: newContact} );
  }

  /*
   *
   */
  /*_handleChangeState = event => {
    console.log("Event: ", event);
    this.setState({ [event.target.name] : event.target.value });
  }*/

  /*
   *
   */
  _handleCreateContact = () => {
    console.log("name: ", this.state.name);
    console.log("phone: ", this.state.phone);
  }

  _handleChangeState = (target, value) => {
    this.setState({ [target] : value });
  }

  render() {
    //const contact = this.state.contact;
    const {contact, name, phone} = this.state;
  
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <table border = "1">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>연락처</th>
                  <th>삭제</th>
                  <th>+</th>
                </tr>
              </thead>
  
              <tbody>
                {
                  <tr>
                    <td><input value = {name} onChange = {this._handleChangeState} placeholder = "name" /></td>
                    <td><input value = {phone} onChange = {this._handleChangeState} placeholder = "phone" /></td>
                    <td><input value = {name} onChange = {(event) => this._handleChangeState('name', event.target.value)} placeholder = "name" /></td>
                    <td><input value = {phone} onChange = {(event) => this._handleChangeState('name', event.target.value)} placeholder = "phone" /></td>
                    <td>
                      <button onClick = {() => this._handleCreateContact()}>New</button>
                    </td>
                  </tr>
                }
                {
                  contact.map( item => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>
                        <button onClick = {() => this._handleRemoveContact(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                  }
                }
              </tbody>
            </table>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
