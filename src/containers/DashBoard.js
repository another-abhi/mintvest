import React, { Component } from "react";
import {
  Modal,
  Button,
  OverlayTrigger,
  Popover,
  Tooltip
} from "react-bootstrap";
import "./DashBoard.css";
import finapp from "../static/images/finapp.jpg";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

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
    const divStyle = {
      backgroundImage: finapp
    };
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return (
      <div style={divStyle}>
        <div className="Dashboard">
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            bsSize="small"
            bsClass="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>Invest Now!</Modal.Title>
              <Button bsStyle="info" onClick={this.handleGo}>
                GO!!!!
              </Button>
            </Modal.Header>
            <Modal.Body>
              <h4>You could be making more</h4>
              <p>Click to find out how.</p>

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
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>

          <div className="lander">
            <h1>Mintvest-FinApp DashBoard</h1>
            <p>
              {console.log(this.props.currentUser)}
              This will be the dashboard of a logged in user with various
              placeholders for things they see. On this page each user will get
              a push ad kind of notification.
            </p>
            <h4>{this.props.currentUser.name}</h4>
          </div>
          <div>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.handleShow}
              disabled={this.state.show}
            >
              Changed my mind!
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
