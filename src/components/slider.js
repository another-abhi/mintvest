/**
 *
 * Slider
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import styles from "./slider.css";

function Slider(props) {
  return (
    <div className={styles.Slider}>
      <font size="0.5">55</font>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        className="slider"
        id="myRange"
        onChange={props.sliderValueChange}
      />
      <font size="0.5">100</font>
    </div>
  );
}

Slider.propTypes = {};

export default Slider;
