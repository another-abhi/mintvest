import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBRangeInput,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBBadge
} from "mdbreact";

class SliderPage extends Component {
  state = {
    value: 0
  };

  handlePricingChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBCol sm="4">
          <MDBCard>
            <MDBCardBody>
              <h3 className="text-center font-weight-bold blue-text mt-3 mb-4 pb-4">
                <strong>Slide to see the pricing change</strong>
              </h3>
              <hr />
              <MDBRow className="my-4" center>
                <MDBRangeInput
                  min={0}
                  max={96}
                  value={0}
                  formClassName="w-75"
                  getValue={this.handlePricingChange}
                />
              </MDBRow>
              <MDBRow>
                <MDBCol className="text-center pb-5" size="6">
                  <h2>
                    <MDBBadge color="blue lighten-2" className="mb-4">
                      You earn
                    </MDBBadge>
                  </h2>
                  <h2 className="display-4" style={{ color: "#0d47a1" }}>
                    <strong>${this.state.value}</strong>
                  </h2>
                </MDBCol>
                <MDBCol className="text-center pb-5" size="6">
                  <h2>
                    <MDBBadge color="blue lighten-2" className="mb-4">
                      Client pays
                    </MDBBadge>
                  </h2>
                  <h2 className="display-4" style={{ color: "#0d47a1" }}>
                    <strong>${223 + +this.state.value}</strong>
                  </h2>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    );
  }
}

export default SliderPage;
