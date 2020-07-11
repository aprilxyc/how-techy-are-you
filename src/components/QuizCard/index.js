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
        this.setState({ checked: !this.state.checked }, () => {
            console.log("this is the value: ", this.state.checked)
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