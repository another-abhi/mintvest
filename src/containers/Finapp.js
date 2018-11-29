import React, { Component } from "react";

import {
  Grid,
  Row,
  Col,
  Modal,
  Button,
  OverlayTrigger,
  Popover,
  Tooltip,
  Image,
  Panel
} from "react-bootstrap";
import "./DashBoard.css";

import SimpleSlider from "../components/MaterialSlider.js";
import panel1 from "../static/images/panel1.png";
import panel2 from "../static/images/panel2.png";
import panel3 from "../static/images/panel3.png";
import invest from "../static/images/invest.png";
export default class Finapp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      currentValue: 50,
      step: 2,
      max: 25000,
      min: 2000
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleGo = () => {
    this.setState({ show: false });
    this.props.history.push("/ClientPortal");
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return (
      <div className="img">
        <div className="Dashboard">
          <Modal show={this.state.show} onHide={this.handleClose} bsSize="lg">
            <Modal.Header closeButton>You could save more</Modal.Header>
            <Modal.Body>
              <SimpleSlider max={this.state.max} min={this.state.min} />
              {/* <h4>Popover in a modal</h4>
              <p>
                there is a{" "}
                <OverlayTrigger overlay={popover}>
                  <a href="#popover">popover</a>
                </OverlayTrigger>{" "}
                here
              </p>

              <h4>Tooltips in a modal</h4>
              <p>
                there is a{" "}
                <OverlayTrigger overlay={tooltip}>
                  <a href="#tooltip">tooltip</a>
                </OverlayTrigger>{" "}
                here
              </p>

              <hr />

              <h4>Overflowing text to show scroll behavior</h4> */}
            </Modal.Body>
            <Modal.Footer>
              <Modal.Title>Want to Find Out More?</Modal.Title>
              <Button bsStyle="info" onClick={this.handleGo}>
                Analyse Now!
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="lander">
            <h1>Spend Analayser Client Landing Page</h1>
            <p>
              This will be the dashboard of a logged in user with various
              placeholders for things they see. On this page each user will get
              a push ad kind of notification.
            </p>
            <Image src={panel3} responsive />
            <Grid>
              <Row>
                <Col xs={6} md={6}>
                  <Image src={panel1} bsSize="small" responsive />
                </Col>
                <Col xs={6} md={6}>
                  <Image src={panel2} responsive />
                </Col>
              </Row>
            </Grid>
          </div>
          <div>
            <Image src={invest} responsive onClick={this.handleShow} />
            {/* <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.handleShow}
              disabled={this.state.show}
            >
              Changed my mind!
            </Button> */}
          </div>
        </div>
      </div>
    );
  }
}
