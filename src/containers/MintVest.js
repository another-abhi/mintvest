import React, { Component } from "react";
import { Image, Button, Panel } from "react-bootstrap";
import ReactBootstrapSlider from "react-bootstrap-slider";
import ReactSliderNativeBootstrap from "react-bootstrap-native-slider";
import "./DashBoard.css";
import Product1 from "../static/images/Product1.png";
import Product2 from "../static/images/Product 2.png";
import Product3 from "../static/images/Product 3.png";
import SimpleSlider from "../components/MaterialSlider.js";
export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      currentValue: 50,
      step: 2,
      max: 5000,
      min: 0
    };
  }
  changeValue = () => {
    let a = 10;
  };
  render() {
    return (
      <div className="Dashboard">
        <div className="lander">
          <h1>Mintvest-Products</h1>
          <p>
            This will be the landing page of mintvest Here we will show product
            offerings tailored to the user
          </p>

          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Panel heading</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Image src={Product1} responsive />
            </Panel.Body>
            <Panel.Footer>
              {/* <Button bsStyle="info" bsSize="large">
                Choose This !
              </Button> */}
              <SimpleSlider max={this.state.max} min={this.state.min} />
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
              <SimpleSlider max={this.state.max} min={this.state.min} />
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
              <SimpleSlider max={this.state.max} min={this.state.min} />
            </Panel.Footer>
          </Panel>
          <h4>{this.props.currentUser.name}</h4>
        </div>
      </div>
    );
  }
}
