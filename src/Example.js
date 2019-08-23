import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, FormGroup, Label, Col, Input, ListGroup } from 'reactstrap';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            show: true
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            show: !this.state.show
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    {/* Brandname */}
                    <NavbarBrand href="/">
                        Demo
                    </NavbarBrand>
                    {/* Add toggler to auto-collapse */}
                    <NavbarToggler onClick={this.state.isOpen} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {/* Pull left */}
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/link/">
                                    Left Nav Link
                                </NavLink>
                            </NavItem>
                        </Nav>

                        {/* Pull right */}
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavBar>
                                <DropdownToggle nav caret>
                                    Bob
                                </DropdownToggle>

                                <DropdownMenu>
                                    <DropdownItem>
                                        Account
                                    </DropdownItem>
                                    <DropdownItem>
                                        Settings
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                { /* Fot the modal to open, this.state.show should become true which is usually triggered by an onClick event */ }
                { /* toggleModal would set state of show to false onClose */ }

                <Modal isOpen={this.state.show} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggle}>
                        Modal title
                    </ModalHeader>

                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ecercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="whith a placeholder" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm="10">
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleSelect" sm="2">Select</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                        <Col sm={10}>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Text Area</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                </Form>

                <br />

                <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>Item ...</ListGroupItem>
                </ListGroup>

                <br />
                { /* ButtonToolbar helps to organize buttons */ }
                <div>
                    <Button color="primary">primary</Button>{' '}

                    <Button color="secondary">primary</Button>{' '}

                    <Button color="success">primary</Button>{' '}

                    <Button color="info">primary</Button>{' '}

                    <Button color="warning">primary</Button>{' '}

                    <Button color="danger">primary</Button>{' '}

                    <Button color="link">primary</Button>
                </div>
            </div>
        );
    }
}