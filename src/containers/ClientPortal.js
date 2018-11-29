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
  Image,
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Input, Container } from "mdbreact";
import "./ClientPortal.css";

import finapp from "../static/images/finapp.jpg";
import recommendation from "../static/images/Recommendation.png";
import accountSetup from "../static/images/AccountSetup.png";

import last from "../static/images/last.jpg";

import paperwork from "../static/images/paperwork.png";

import cp1 from "../static/images/cp1.png";
import cp2 from "../static/images/cp2.png";
import cp3 from "../static/images/cp3.png";
import cp4 from "../static/images/cp4.png";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      recomend: false,
      radio: 2
    };
  }
  handleEnd = () => {
    this.setState({ last: false });
  };
  handleLast = () => {
    this.setState({ paperwork: false, last: true });
  };
  handlePaperwork = () => {
    this.setState({ accountSetup: false, paperwork: true });
  };
  handleAccountSetup = () => {
    this.setState({ recomend: false, accountSetup: true });
  };
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
          </div>
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
          <Grid>
            <Row>
              <Col xs={6} md={6}>
                <Image src={cp1} bsSize="small" responsive />
              </Col>
              <Col xs={6} md={6}>
                <Image src={cp2} responsive />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <Image src={cp3} bsSize="small" responsive />
              </Col>
              <Col xs={6} md={6}>
                <Image src={cp4} responsive onClick={this.handleShow} />
              </Col>
            </Row>
          </Grid>
          {this.state.recomend === true && (
            <Modal
              show={this.state.recomend}
              onHide={this.handleAccountSetup}
              bsSize="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>Reccomended Investment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Panel bsStyle="success">
                  <Panel.Heading>
                    <Panel.Title componentClass="h1">
                      Try this product
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <Image src={recommendation} responsive />
                  </Panel.Body>
                </Panel>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleAccountSetup} bsStyle="success">
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>
          )}
          {this.state.accountSetup === true && (
            <Modal
              show={this.state.accountSetup}
              onHide={this.handlePaperwork}
              bsSize="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>Account Setup</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Panel bsStyle="success">
                  <Panel.Heading>
                    <Panel.Title componentClass="h1">Account Setup</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <Image src={accountSetup} responsive />
                  </Panel.Body>
                </Panel>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handlePaperwork} bsStyle="success">
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>
          )}
          {this.state.paperwork === true && (
            <Modal
              show={this.state.paperwork}
              onHide={this.handleEnd}
              bsSize="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>Paperwork</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Panel bsStyle="success">
                  <Panel.Heading>
                    <Panel.Title componentClass="h1">Paperwork</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <Image src={paperwork} responsive />
                  </Panel.Body>
                </Panel>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleLast} bsStyle="success">
                  Generate
                </Button>
              </Modal.Footer>
            </Modal>
          )}
          {this.state.last === true && (
            <Modal show={this.state.last} onHide={this.handleEnd} bsSize="lg">
              <Modal.Header closeButton>
                <Modal.Title>Done!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Panel bsStyle="success">
                  <Panel.Heading>
                    <Panel.Title componentClass="h1">Done!</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <Image src={last} responsive />
                  </Panel.Body>
                </Panel>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button onClick={this.handlePaperwork} bsStyle="success">
                  Generate
                </Button> */}
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}
