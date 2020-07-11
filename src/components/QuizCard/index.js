import React, { Component } from 'react';

// styled components
import { QuizLabel } from '../../utils/Cards';
import Checkbox from '../Checkbox/index';

class QuizCard extends Component {
    constructor(props) {
        super()
        this.state = {
            checked: false
        }
    }

    handleCheck() {
        console.log("start state: ", this.state.checked);
        this.setState({ checked: !this.state.checked }, () => {
            // replace with ternary operator
            if(this.state.checked) {
                this.props.incrementCount();
            } else {
                this.props.decrementCount();
            }
        });
    }

    render() {
        return (
            <QuizLabel checked={this.state.checked}>  
                <label>
                    {this.props.text}
                    <Checkbox 
                        checked  = {this.state.checked}
                        onChange = {() => this.handleCheck()}
                    />
                </label>
            </QuizLabel> 
            )
    }
}

export default QuizCard;