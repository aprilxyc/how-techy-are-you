import React, { Component } from 'react';
import { QuizCardStyle, QuizLabel, QuizSection} from '../../utils/Cards';
import { Grid, Row, Col } from '../../utils/FlexComponents';

class QuizCard extends Component {
    constructor(props) {
        super()
        this.state = {
            checked: false
        }
    }

    handleCheck() {
        this.setState({ checked: !this.state.checked }, () => {
            console.log("this is the value: ", this.state.checked)
        });
    }

    render() {
        return (
            <QuizLabel checked={this.state.checked}>
                {this.props.text}
                <input type="checkbox" onChange={() => this.handleCheck()}></input>
            </QuizLabel>
            )
    }
}

export default QuizCard;