import React, { Component } from "react";
import {
  Modal,
  Button,
  Popover,
  Tooltip,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Panel,
  Image
} from "react-bootstrap";

import { Input, Container } from "mdbreact";
import "./ClientPortal.css";

import finapp from "../static/images/finapp.jpg";
import recommendation from "../static/images/Recommendation.png";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      recomend: false,
      radio: 2
    };
  }
  handleRecomend = () => {
    this.setState({ show: false, recomend: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleGo = () => {
    this.setState({ show: false });
    this.props.history.push("/MintVest");
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return (
      <div className="img">
        <div className="Dashboard">
          <div className="lander">
            <h1>Client Portal Landing Page</h1>
            <p>
              {console.log(this.props.currentUser)}
              Client Portal Landing Page
            </p>
            <h4>{this.props.currentUser.name}</h4>
          </div>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Learning Centre
          </Button>
          <div />
          {this.state.show === true && (
            <Modal show={this.state.show} onHide={this.handleClose} bsSize="lg">
              <Modal.Header closeButton>
                <Modal.Title>Tell us about yourself!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <br />
                1. What is the investment time horizon on these investable
                assets?
                <br />
                <ButtonToolbar>
                  <ToggleButtonGroup type="radio" name="question1">
                    <ToggleButton value={1}>Less than 3 years</ToggleButton>

                    <ToggleButton value={2}>3 - 5 years</ToggleButton>
                    <ToggleButton value={3}>6 - 9 years</ToggleButton>
                    <ToggleButton value={4}>10+ years</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
                <br />
                1.What is your current Annual Household Income?
                <br />
                <ButtonToolbar>
                  <ToggleButtonGroup type="radio" name="question2">
                    <ToggleButton value={1}>$0 - 30,000</ToggleButton>
                    <ToggleButton value={2}>$30,001 - 50,000</ToggleButton>
                    <ToggleButton value={3}>$50,001 - 100,000</ToggleButton>
                    <ToggleButton value={4}>$100,001 - 250,000</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
                <br />
                1.What is your Approximate Net Worth?
                <br />
                <ButtonToolbar>
                  <ToggleButtonGroup type="radio" name="question3">
                    <ToggleButton value={1}>Less than $250K</ToggleButton>
                    <ToggleButton value={2}>$250 - 500K</ToggleButton>
                    <ToggleButton value={3}>$500K - 1M</ToggleButton>
                    <ToggleButton value={4}>$1M - 3M</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleRecomend} bsStyle="success">
                  Find me a suitable investment
                </Button>
              </Modal.Footer>
            </Modal>
          )}
          {this.state.recomend === true && (
            <Panel bsStyle="success">
              <Panel.Heading>
                <Panel.Title componentClass="h1">Try this product</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Image src={recommendation} responsive />
              </Panel.Body>
            </Panel>
          )}
        </div>
      </div>
    );
  }
}
