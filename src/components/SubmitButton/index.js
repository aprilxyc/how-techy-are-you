import React, { Component } from 'react';
import styled from 'styled-components';

// components
import Modal from '../Modal/index';

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
    this.state = {
      isModalOpen: false
    };
  }

    toggleModalState = e => {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    render() {
        return (
          <div>
            <Button onClick={() => this.toggleModalState()}> Submit </Button>
              {this.state.isModalOpen && (
                  <Modal>
                    <div>
                      I am the content in modal!
                    </div>
                  </Modal>
              )}
          </div>
        )
        
    }
}

export default SubmitButton;
