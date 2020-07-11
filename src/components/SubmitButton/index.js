import React, { Component } from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  top          : 60%;
  left         : 40%;
  background   : #4137cb;
  font-size    : 1em;
  border       : 2px solid;
  border-radius: 3px;
  color        : #ffffff;
`;


class SubmitButton extends Component {

  handleClick = () => {
    // render result page when clicked
    console.log("this was clicked!")
  }

    render() {
        return (

          <Button onClick={() => this.handleClick()}>
            Submit
          </Button>

        )
        
    }
}

export default SubmitButton;
