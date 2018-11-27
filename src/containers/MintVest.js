import React, { Component } from "react";
import { Image, Button, Panel } from "react-bootstrap";
import "./DashBoard.css";
import Product1 from "../static/images/Product1.png";
import Product2 from "../static/images/Product 2.png";
import Product3 from "../static/images/Product 3.png";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="lander">
          <h1>Mintvest-Products</h1>
          <p>
            {console.log(this.props.currentUser)}
            This will be the landing page of mintvest Here we will show product
            offerings tailored to the user
          </p>
          <p>
            <div>
              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Image src={Product1} responsive />
                </Panel.Body>
                <Panel.Footer>
                  <Button bsStyle="info" bsSize="large">
                    Choose This !
                  </Button>
                </Panel.Footer>
              </Panel>

              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Image src={Product2} responsive />
                </Panel.Body>
                <Panel.Footer>
                  <Button bsStyle="info" bsSize="large">
                    Choose This !
                  </Button>
                </Panel.Footer>
              </Panel>

              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Image src={Product3} responsive />
                </Panel.Body>
                <Panel.Footer>
                  <Button bsStyle="info" bsSize="large">
                    Choose This !
                  </Button>
                </Panel.Footer>
              </Panel>
            </div>
          </p>
          <h4>{this.props.currentUser.name}</h4>
        </div>
      </div>
    );
  }
}
