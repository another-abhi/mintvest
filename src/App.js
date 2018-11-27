import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      currentUser: {}
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };
  handleLogout = event => {
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  };
  setLogin = user => {
    console.log(user);
    this.setState({ currentUser: user });
  };
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      setLogin: this.setLogin,
      users: [
        {
          email: "abc@abc.com",
          password: "abc",
          name: "John Smith",
          currentParams: "a"
        },
        {
          email: "cde@cde.com",
          password: "cde",
          name: "Alice George",
          currentParams: "b"
        }
      ],
      currentUser: this.state.currentUser
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Mintvest</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated ? (
                <NavItem onClick={this.handleLogout}>Logout</NavItem>
              ) : (
                <Fragment>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
