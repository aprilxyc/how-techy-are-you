import React, { Component } from "react";

// styled components
import { PageHeader, StyledParagraph } from "../../utils/Cards";
import { Grid, Row, Col } from "../../utils/FlexComponents";

class ResultPage extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col size={2} />
          <Col size={4}>
            <PageHeader>
              You got a score of: 
            </PageHeader>
          </Col>
          <Col size={2} />
        </Row>
        <Row>
            <Col size={3}/>
            <Col size={1}>
                <PageHeader>{this.props.scoreCount}</PageHeader>
            </Col>
            <Col size={3} />
        </Row>
      </Grid>
    );
  }
}

export default ResultPage;
