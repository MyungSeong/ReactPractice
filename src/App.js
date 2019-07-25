import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    isEditMode: -1, // -1, null or bool

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
    const newContact = this.state.contact.filter(data => data.id !== id);
    console.log("newContact: " + newContact);
    this.setState({ contact: newContact} );
  }

  /*
   * Advanced Method
   */
  /*_handleChangeState = event => {
    console.log("Event: ", event);
    this.setState({ [event.target.name] : event.target.value });
  }*/

  /*
   * Create Function
   */
  _handleCreateContact = () => {
    console.log("name: ", this.state.name);
    console.log("phone: ", this.state.phone);

    /*const newContact = this.state.contact;
    newContact.push();*/

    const lastIDIndex = this.state.contact[this.state.contact.length - 1].id + 1;
    
    this.setState({ 
      contact: [
        ...this.state.contact,
        {
          id: lastIDIndex,
          name: this.state.name,
          phone: this.state.phone
        }
      ]
     }, () => {
       console.log("newContact ID: " + lastIDIndex);
     });
  }

  _handleChangeState = (target, value) => {
    this.setState({ [target] : value });
  }

  /*
   * Edit Mode
   */
  _handleToggleEditMode = (id) => {
    /*this.setState( prevState => { 
      const newID = prevState.isEditMode === id ? -1 : id;

      return { isEditMode: newID };
    });*/

    this.setState( prevState => ({ isEditMode: prevState.isEditMode === id ? -1 : id }) );
  }

  /*
   * Edit Apply
   */
  _handleChangeContact = (index, event) => {
    const newContact = this.state.contact.slice(0);
    newContact[index][event.target.name] = event.target.value;

    this.setState({ contact: newContact });
  }

  render() {
    //const contact = this.state.contact;
    const { contact, name, phone } = this.state;
    let isEditMode = this.state.isEditMode;
    let data = contact;

    if (name) {
      //data = contact.filter(data => data.name === name); // 정확한 검색
      data = contact.filter(_data => _data.name.indexOf(name) > -1);
    }

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <table border = "1">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>연락처</th>
                  <th>-</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {
                  <tr>
                    <td>
                      <input value = {name} onChange = {(event) => this._handleChangeState('name', event.target.value)} placeholder = "Insert Name" />
                    </td>
                    <td colSpan = '3'></td>
                  </tr>
                }
                {
                  <tr>
                    <td>
                      <input value = {name} onChange = {(event) => this._handleChangeState('name', event.target.value)} placeholder = "Name" />
                    </td>
                    <td>
                      <input value = {phone} onChange = {(event) => this._handleChangeState('phone', event.target.value)} placeholder = "Phone" />
                    </td>
                    <td colSpan = '2'>
                      <button onClick = {() => this._handleCreateContact()}>New</button>
                    </td>
                  </tr>
                }
                {
                  data.map( (item, index) => (
                    <tr key = { index.toString() }>
                      { (isEditMode > -1 && isEditMode === item.id) ? (
                        <>
                          <td>
                            <input name = "name" value = {item.name} onChange = {(event) => this._handleChangeContact(index, event)} />
                          </td>
                          <td>
                            <input name = "phone" value = {item.phone} onChange = {(event) => this._handleChangeContact(index, event)} />
                          </td>
                        </>
                        ) : (
                        <>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                        </>
                      ) }
                      <td>
                        <button onClick = {() => this._handleToggleEditMode(item.id)}>Edit</button>
                      </td>
                      <td>
                        <button onClick = {() => this._handleRemoveContact(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
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
