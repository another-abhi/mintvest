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
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              bsSize="big"
            >
              <Modal.Header closeButton>
                <Modal.Title>Tell us about yourself!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <br />
                1.Answer this question with a choice.
                <br />
                <ButtonToolbar>
                  <ToggleButtonGroup type="checkbox">
                    <ToggleButton value={1}>Checkbox 1</ToggleButton>
                    <ToggleButton value={2}>Checkbox 2</ToggleButton>
                    <ToggleButton value={3}>Checkbox 3</ToggleButton>
                    <ToggleButton value={3}>Checkbox 3</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
                <br />
                1.Answer this question with a choice.
                <br />
                <ButtonToolbar>
                  <ToggleButtonGroup type="checkbox">
                    <ToggleButton value={1}>Checkbox 1</ToggleButton>
                    <ToggleButton value={2}>Checkbox 2</ToggleButton>
                    <ToggleButton value={3}>Checkbox 3</ToggleButton>
                    <ToggleButton value={3}>Checkbox 3</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
                <br />
                1.Answer this question with a choice.
                <br />
                <ButtonToolbar>
                  <ToggleButtonGroup type="checkbox">
                    <ToggleButton value={1}>Checkbox 1</ToggleButton>
                    <ToggleButton value={2}>Checkbox 2</ToggleButton>
                    <ToggleButton value={3}>Checkbox 3</ToggleButton>
                    <ToggleButton value={3}>Checkbox 3</ToggleButton>
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
