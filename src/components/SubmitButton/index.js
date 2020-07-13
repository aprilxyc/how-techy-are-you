import React, { Component } from 'react';

// styled components
import styled from 'styled-components';

export const Button = styled.button`
height       : 45px;
width        : 150px;
background   : #4137cb;
font-size    : 1em;
border       : 2px solid;
border-radius: 3px;
color        : #ffffff;

&:hover {
  transform: translateY(-3px);
}
`;


class SubmitButton extends Component {
  constructor(props) {
    super()
  }
    render() {
        return (
          <div>
            <Button onClick={this.props.onClick}>SUBMIT</Button>
          </div>
        )
        
    }
}

export default SubmitButton;
