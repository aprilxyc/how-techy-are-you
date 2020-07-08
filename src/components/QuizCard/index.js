import React, { Component } from 'react';
import { QuizCardStyle, QuizLabel, QuizCheckbox} from '../../utils/Cards';

class QuizCard extends Component {
    constructor(props) {
        super()
        this.state = {
            showAnimation: false
        }
    }

    startAnimation() {
        this.setState({ showAnimation: true });
    }


    render() {
        return (
                <div>
                    <QuizLabel>You choose an application based on its UI</QuizLabel>
                    <input type="checkbox" onChange={this.startAnimation}></input>
                </div>
                )
    }
}

export default QuizCard;