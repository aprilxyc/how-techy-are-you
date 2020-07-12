import React, { Component } from 'react';

// styled components
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
  constructor(props) {
    super()
  }
    render() {
        return (
          <div>
            <Button onClick={this.props.onClick}>Submit</Button>
          </div>
        )
        
    }
}

export default SubmitButton;
