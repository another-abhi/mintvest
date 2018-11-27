import React, { Component } from "react";
import { Modal, Button, Row, Col, Grid } from "react-bootstrap";
// import Modal from "../components/Modal";
import "./DashBoard.css";

export default class DashBoard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Grid>
          <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
              Hello
              <Modal.Dialog bsSize="small" dialogClassName="custom-modal">
                <Modal.Header>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>One fine body...</Modal.Body>

                <Modal.Footer>
                  <Button>Close</Button>
                  <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Col>
          </Row>
        </Grid>
        <div className="lander">
          <h1>Mintvest-FinApp DashBoard</h1>
          <p>
            {console.log(this.props.currentUser)}
            This will be the dashboard of a logged in user with various
            placeholders for things they see. On this page each user will get a
            push ad kind of notification.
          </p>
          <h4>{this.props.currentUser.name}</h4>
        </div>
        <div className="static-modal" />
      </div>
    );
  }
}
