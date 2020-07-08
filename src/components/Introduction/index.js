import React, { Component } from "react";
import styled from "styled-components";

// style-components
import { IntroCard } from "../../utils/Cards";

// animation
import { Transition } from "react-transition-group";
import { Animation } from "../Animation/index";

const Button = styled.button`
  position     : absolute;
  top          : 60%;
  left         : 40%;
  background   : #4137cb;
  font-size    : 1em;
  margin       : 1em;
  border       : 2px solid;
  border-radius: 3px;
  color        : #ffffff;
  padding      : 5px;
`;

class Introduction extends Component {
  constructor(props) {
    super();
  }

  componentDidUpdate(prevProps) {
    console.log("TOGGLED");
    console.log("this.props.animation: ", this.props.animation);
    console.log("prevProps.animation: ", prevProps.animation);
    if (prevProps.animation === true) {
      setTimeout(() => {
        prevProps.animation = false;
      }, 3000);
    }
  }

  render() {
    const whatever = this.props.animation;
    console.log(whatever);
    return (
      <div>
        <Transition in={this.props.animation} timeout={500}>
          {(state) => (
            <Animation state={state}>
              <IntroCard>
                <p>Welcome to the quiz</p>
                <ul>
                  <li>There are 20 questions</li>
                  <li>Answer as honestly as you can.</li>
                </ul>
                <Button onClick={this.props.handleClick}>
                  <div>
                    Start
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                </Button>
              </IntroCard>
            </Animation>
          )}
        </Transition>
      </div>
    );
  }
}

export default Introduction;
