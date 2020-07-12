// react
import React, { Component } from "react";

// css transitions
import { Transition } from "react-transition-group";

// styled-components
import styled from "styled-components";
import { IntroCard } from "../../utils/Cards";
import { StartButton } from "../../utils/Button";
import { Grid, Row, Col } from "../../utils/FlexComponents";
import "./index.css";

const StyledWelcome = styled.h1`
  position      : relative;
  top           : -30px;
  left          : 90px;
  font-family   : "Quicksand", sans-serif;
  color         : #000000;
  font-size     : 2em;
  letter-spacing: -0.025em;
  line-height   : 1.25;
  margin-left   : -0.05em;
`;

const StyledParagraph = styled.h3`
  position      : relative;
  top           : -40px;
  left          : 80px;
  font-family   : "Quicksand", sans-serif;
  color         : #000000;
  font-size     : 20px;
  letter-spacing: -0.05em;
`;

class Introduction extends Component {
  constructor(props) {
    super();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.animation === true) {
      setTimeout(() => {
        prevProps.animation = false;
      }, 3000);
    }
  }

  // for some reason, the CSS background only works when there's text
  render() {
    return (
      <Grid>
        <Row>
         <Col />
          <Col size={2}>
            <Transition in={this.props.animation} timeout={500}>
              {(state) => (
                <IntroCard state={state}>
                  <div>
                    <StyledWelcome>HOW TECHY ARE YOU?</StyledWelcome>
                    <StyledParagraph>
                      There are 30 questions. Answer them all.
                    </StyledParagraph>
                  </div>
                  <div>
                    <StartButton onClick={this.props.handleClick}>
                      Start <span></span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </StartButton>
                  </div>
                </IntroCard>
              )}
            </Transition>
          </Col>
          <Col />
        </Row>
      </Grid>
    );
  }
}

export default Introduction;
