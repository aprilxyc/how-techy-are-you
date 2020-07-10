import React, { Component } from 'react';
import QuizCard from '../QuizCard/index';
import { PageHeader } from '../../utils/Cards';
import { Grid, Row, Col } from '../../utils/FlexComponents';

const quizQuestions = [
    "You choose your applications based on the UI",
    "You need at least two monitors to do some work",
    "How likely are you to buy the latest new gadgets?",
    "You own a mechanical keyboard"
]

class QuizPage extends Component {
    render() {
        const questionList = quizQuestions.map((question) => {
            return (
                <Row>
                    <Col size={12}>
                        <QuizCard text={question}/>
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
            </Grid>
        )
    }
}

export default QuizPage;