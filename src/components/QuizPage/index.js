import React, { Component } from "react";
import QuizCard from "../QuizCard/index";

// styled components
import { PageHeader } from "../../utils/Cards";
import { Grid, Row, Col } from "../../utils/FlexComponents";
import SubmitButton from "../SubmitButton/index";

// constants
import { quizQuestions } from "../../utils/consts/consts";

// compoennts
import ResultPage from "../ResultPage/index";

// stores the total points
let pointCounter = 0;

class QuizPage extends Component {
  constructor(props) {
    super();
    this.state = {
      isResultsPage: false,
    };
  }

  incrementCounter = () => {
    pointCounter += 1;
  };

  decrementCounter = () => {
    pointCounter -= 1;
  };

  handleClick = () => {
    this.setState({ isResultsPage: true });
  };

  render() {
    const questionList = quizQuestions.map((question) => {
      return (
        <Row>
          <Col size={1.5} collapse="xs" />
          <Col size={2}>
            <QuizCard
              text           = {question}
              incrementCount = {this.incrementCounter}
              decrementCount = {this.decrementCounter}
            />
          </Col>
          <Col size={1.5} collapse="xs" />
        </Row>
      );
    });

    const resultPage = <ResultPage scoreCount={pointCounter} />;

    return (
      <div>
        {this.state.isResultsPage ? (
          resultPage
        ) : (
          <div>
            <Row>
              <Col size={1.5} />
              <Col size={2}>
                <PageHeader>How techy are you?</PageHeader>
              </Col>
              <Col size={1.5} />
            </Row>
            {questionList}
            <Row>
              <Col size={1.5} />
              <Col size={2}>
                <SubmitButton onClick={() => this.handleClick()} />
              </Col>
              <Col size={1.5} />
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default QuizPage;
