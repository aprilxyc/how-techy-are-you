import React, { Component } from "react";

// styled components
import { PageHeader, StyledParagraph } from "../../utils/Cards";
import { Grid, Row, Col } from "../../utils/FlexComponents";

class ResultPage extends Component {
    
  renderSwitch(score) {
    switch (true) {
      case score < 10: 
        return "Less than ten";
      case score < 20:
        return "Between 10 and 20";
      case score < 30:
        return "Between 20 and 30";
      default: 
        return "Woops, no matched case.";
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
          <Col size={1.5} />
          <Col size={2}>
            <StyledParagraph>
              {this.renderSwitch(parseInt(this.props.score))}
            </StyledParagraph>
          </Col>
          <Col size={1.5} />
        </Row>
      </Grid>
    );
  }
}

export default ResultPage;
