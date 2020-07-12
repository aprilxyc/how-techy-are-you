import React, { Component } from "react";

// styled components
import styled from 'styled-components';
import { Grid, Row, Col } from "../../utils/FlexComponents";

const StyledParagraph = styled.h3`
position      : relative;
top           : -40px;
font-family   : "Quicksand", sans-serif;
color         : #000000;
font-size     : 20px;
letter-spacing: -0.05em;

@media only screen and (max-width: 600px) {
    position      : relative;
    top           : 10px;
    font-size     : 0.5em;
    letter-spacing: -0.025em;
  }
`;

const PageHeader = styled.h1`
  font-family   : "Quicksand", sans-serif;
  color         : #ffffff;
  font-size     : 5em;
  letter-spacing: -0.025em;
  line-height   : 1.25;
  margin-left   : 1em;

  @media only screen and (max-width: 600px) {
    font-size     : 2em;
    letter-spacing: -0.025em;
  }
`;


class ResultPage extends Component {
    
  renderSwitch(score) {
    switch (true) {
      case score <= 10: 
        return "Alright, you're not very into tech. But you could learn more. Have you considered joining MAC? ✨";
      case score <= 20:
        return "Getting there. You definitely like using technology but you're still getting used to how fast-paced it is. Perhaps you'd want to join MAC to nurture this side of you that loves learning? ✨";
      case score <= 30:
        return "You're an expert in technology and you're probably the go-to for your friends and family's tech problems. You'd be an awesome fit for MAC - we are always looking for quick and eager learners. ✨";
      default: 
        return "Woops, not sure what happened here.";
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col size={2} />
          <Col size={4}>
            <PageHeader>You got a score of: </PageHeader>
          </Col>
          <Col size={2} />
        </Row>
        <Row>
          <Col size={3} />
          <Col size={1}>
            <PageHeader>
              <strong>{this.props.score}</strong>
            </PageHeader>
          </Col>
          <Col size={3} />
        </Row>
        <Row>
          <Col size={2} />
          <Col size={2}>
            <StyledParagraph>
              {this.renderSwitch(parseInt(this.props.score))}
            </StyledParagraph>
          </Col>
          <Col size={2} />
        </Row>
      </Grid>
    );
  }
}

export default ResultPage;
