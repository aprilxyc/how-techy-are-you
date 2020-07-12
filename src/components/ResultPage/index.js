import React, { Component } from "react";

// styled components
import { PageHeader } from "../../utils/Cards";
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
                {this.props.scoreCount}
          </Col>
          <Col size={2} />
        </Row>
      </Grid>
    );
  }
}

export default ResultPage;
