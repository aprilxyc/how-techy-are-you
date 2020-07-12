import React, { Component } from 'react';

// styled components
import styled, { css } from 'styled-components'
import Checkbox from '../Checkbox/index';

const QuizLabel = styled.div`
  font-family     : "Quicksand", sans-serif;
  box-shadow      : 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius   : 3px;
  width           : 500px;
  height          : 50px;
  text-align      : left;
  border          : 3px solid #ffffff;
  color           : #808080;
  z-index         : 2;
  transition      : color 200ms ease-in;
  overflow        : hidden;
  background-color: #ffffff;
  line-height     : 3rem;
  text-align      : left;
  margin-bottom   : 20px;

  &:hover {
    transform: translateY(-3px);
  }

  ${({ checked }) =>
    checked &&
    css`
       {
        width     : 500px;
        height    : 50px;
        border    : 3px solid #ffffff;
        background: #1ab8fd;
        color     : #ffffff;
      }
    `}

    @media only screen and (max-width: 600px) {
      width     : 300px;
      font-size : 10px;
      text-align: left;
    }
`;


class QuizCard extends Component {
    constructor(props) {
        super()
        this.state = {
            checked: false
        }
    }

    handleCheck() {
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
                <span style={{marginRight: '1em'}}></span>
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