import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";
import { Image, Panel } from "react-bootstrap";
import Product1 from "../static/images/Product1.png";
import Product2 from "../static/images/Product 2.png";
import Product3 from "../static/images/Product 3.png";

const styles = {
  root: {
    width: 500
  },
  slider: {
    padding: "22px 0px"
  }
};

class SimpleSlider extends React.Component {
  state = {
    value: 50,
    picture: ""
  };

  handleChange = (event, value) => {
    let pic = Product1;
    if (value >= 1000) {
      pic = "";
    }
    if (value >= 2000) {
      pic = Product1;
    }
    if (value >= 10000) {
      pic = Product2;
    }
    if (value >= 20000) {
      pic = Product3;
    }
    this.setState({ value: value, picture: pic });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Try Moving the Slider</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Image src={this.state.picture} responsive />
          </Panel.Body>
        </Panel>
        <Typography variant="h3" id="label">
          Your Investment
        </Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          onChange={this.handleChange}
          max={this.props.max}
          min={this.props.min}
          step={500}
        />

        <Typography variant="h4" id="label">
          Amount you invest : ${value}
        </Typography>
        <Typography variant="h4" id="label">
          Expected Return : ${value + (value * 10) / 100}
        </Typography>
        <Typography variant="h4" id="label">
          Returns in a normal product : ${value + (value * 5) / 100}
        </Typography>
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSlider);
