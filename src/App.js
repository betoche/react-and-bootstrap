import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

/* Components */
import SearchBar from './contact-list/SearchBar';
import ContactCard from './contact-list/ContactCard';
import AddContactsModal from './contact-list/AddContactsModal';
import NavigationMenu from './contact-list/NavigationMenu';

const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            searchText: '',
            searchResult: [],
            contactList: [],
            show: false,
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.returnContactList = this.returnContactList.bind(this);
    }

    /* ContactList logic */

    handleSearch(searchText) {
        this.setState({ searchResult: [], searchText: searchText });
        this.state.contactList.map(contact => {
            if (searchContact(contact, searchText)) {
                this.setState(prevState => ({
                    searchResult: [...prevState.searchResult, contact]
                }));
            }
            return true;
        })
    }

    componentWillMount() {
        let init = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(contactsAPI, init)
            .then(response => response.json())
            .then(
                data => this.setState(
                    prevState => ({
                        contactList: [...data.contacts]
                    })
                )
            )
    }

    returnContactList() {
        return this.state.searchText ? this.state.searchResult : this.state.contactList
    }

    /* UI Logic */

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState( { show: true } );
    }

    render() {
        return (
            <div>

                {/* Navigation bar */}
                <NavigationMenu onClick={this.handleShow} />

                {/* fluid Grid */}
                <Container fluid>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} >

                            {/* Modal window hidden by default */}
                            <AddContactsModal show={this.state.show} onClose={this.handleClose} />

                            {/* Search bar */}
                            <SearchBar onSearch={this.state.show} />
                            <br />

                            {/* Contact list */}
                            <ListGroup>
                                {console.log(this.returnContactList)}
                                {this.state.searchResult.map(
                                    (contact) =>
                                        <ListGroupItem key={contact.email} className="list-group-item">
                                            <ContactCard contact={contact} />
                                        </ListGroupItem>
                                )}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const searchContact = (contact, searchText) => (
  contact.name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  contact.surname.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  contact.phone.toString().search(searchText) !== -1
)

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/