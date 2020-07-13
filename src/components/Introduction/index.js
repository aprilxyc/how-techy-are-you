// react
import React, { Component } from "react";

// css transitions
import { Transition } from "react-transition-group";

// styled-components
import styled from "styled-components";
import { Grid, Row, Col } from "../../utils/FlexComponents";
import "./index.css";

const StyledWelcome = styled.h1`
  position      : relative;
  top           : -30px;
  left          : 90px;
  font-size     : 2em;
  font-family   : "Quicksand", sans-serif;
  color         : #000000;
  letter-spacing: -0.025em;
  line-height   : 1.25;
  margin-left   : -0.05em;

  @media only screen and (max-width: 600px) {
    position : relative;
    font-size: 3em;
    left     : 80px;
  }
`;

const StyledParagraph = styled.h3`
  position      : relative;
  top           : -40px;
  left          : 80px;
  font-family   : "Quicksand", sans-serif;
  color         : #000000;
  font-size     : 20px;
  letter-spacing: -0.05em;

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const IntroCard = styled.div`
  display         : flex;
  margin-top      : 300px;
  height          : 500px;
  width           : 600px;
  background-color: #ffffff;
  align-items     : center;
  justify-content : center;
  box-shadow      : 0px 3px 15px rgba(0, 0, 0, 0.2);
  font-family     : "Quicksand", sans-serif;

  transition: 0.5s;
  transform : translateX(
    ${({ state }) => (state === "entering" || state === "entered" ? 1800 : 0)}px
  );

  @media only screen and (max-width: 600px) {
    height       : 400px;
    width        : 300px;
    margin-top   : 150px;
    margin-bottom: 150px;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 240px;
    height    : 300px
  }
}
`;

const StartButton = styled.button`
  position        : relative;
  top             : 60px;
  right           : 156px;
  border          : none;
  display         : block;
  text-align      : center;
  cursor          : pointer;
  text-transform  : uppercase;
  outline         : none;
  overflow        : hidden;
  color           : #fff;
  font-weight     : 700;
  font-size       : 15px;
  background-color: #4137cb;
  padding         : 17px 60px;
  box-shadow      : 0 5px 15px rgba(0, 0, 0, 0.2);

  :after {
    content           : "";
    position          : absolute;
    left              : 0;
    top               : 0;
    height            : 490%;
    width             : 140%;
    background        : #ffe430;
    -webkit-transition: all 0.5s ease-in-out;
    transition        : all 0.5s ease-in-out;
    -webkit-transform : translateX(-98%) translateY(-25%) rotate(45deg);
    transform         : translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform        : translateX(-9%) translateY(-25%) rotate(45deg);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 10px;
    top      : 90px;
    right    : 80px;
  }
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
          <Col size={1.5} collapse="xs" />
          <Col size={2} collapse="xs">
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
          <Col size={1.5} collapse="xs" />
        </Row>
      </Grid>
    );
  }
}

export default Introduction;
