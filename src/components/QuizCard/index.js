import React, { Component } from 'react';
import { QuizCardStyle, QuizLabel, QuizCheckbox} from '../../utils/Cards';

class QuizCard extends Component {
    constructor(props) {
        super()
        this.state = {
            checked: false
        }
    }

    handleCheck() {
        console.log("starting value: ", this.state.checked)
        this.setState({ checked: !this.state.checked }, () => {
            console.log("this is the value: ", this.state.checked)
        });
    }


    render() {
        return (
                <div>
                    <QuizLabel buttonClicked={this.state.checked}>
                        <div>You choose an application based on its UI.</div>
                        <input type="checkbox" onChange={() => this.handleCheck()}></input>
                    </QuizLabel>
                </div>
                )
    }
}

export default QuizCard;