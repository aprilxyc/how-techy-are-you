import React, { Component } from "react";

// css transitions
import { Transition } from "react-transition-group";
import { Animation } from "../Animation/index";

// style-components
import styled from "styled-components";
import { IntroCard } from "../../utils/Cards";
import { StartButton } from "../../utils/Button";


class Introduction extends Component {
  constructor(props) {
    super();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.animation === true) {
      setTimeout(() => {
        prevProps.animation = false;
      }, 3000);
    }
  }

  render() {
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
                <StartButton onClick={this.props.handleClick}>
                  <div>
                    Start
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                </StartButton>
              </IntroCard>
            </Animation>
          )}
        </Transition>
      </div>
    );
  }
}

export default Introduction;
