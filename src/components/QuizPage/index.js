import React, { Component } from 'react';
import QuizCard from '../QuizCard/index';

// styled components
import { PageHeader } from '../../utils/Cards';
import { Grid, Row, Col } from '../../utils/FlexComponents';
import SubmitButton from '../SubmitButton/index';

// constants
import { quizQuestions } from '../../utils/consts/consts';


// stores the total points
let pointCounter = 0;

class QuizPage extends Component {

    incrementCounter = () => {
        pointCounter += 1
        console.log("incremented: ", pointCounter);
    }

    decrementCounter = () => {
        pointCounter -= 1
        console.log("decremented: ", pointCounter);
    }

    render() {
        const questionList = quizQuestions.map((question) => {
            return (
                <Row>
                    <Col size={12}>
                        <QuizCard
                            text           = {question}
                            incrementCount = {this.incrementCounter}
                            decrementCount = {this.decrementCounter}/>
                    </Col>
                </Row>
            )
        })

        return (
            <Grid>
                <Row>
                    <PageHeader>
                        How techy are you?
                    </PageHeader>
                </Row>
                {questionList}
                <Row>
                    <SubmitButton>
                       Submit
                   </SubmitButton>
                </Row>
            </Grid>
        )
    }
}

export default QuizPage;