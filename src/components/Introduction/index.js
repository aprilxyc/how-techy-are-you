// react
import React, { Component } from "react";

// css transitions
import { Transition } from "react-transition-group";

// styled-components
import { IntroCard } from "../../utils/Cards";
import { StartButton } from "../../utils/Button";
import { Grid, Row } from "../../utils/FlexComponents";
import "./index.css";

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

  // for some reason, the CSS background only works when there's text
  render() {
    return (
        <Grid>
          <Row>
          <Transition in={this.props.animation} timeout={500}>
            {(state) => (
              <IntroCard state={state}>
                <div>
                  <p>Welcome to the quiz</p>
                  <ul>
                    <li>There are 30 questions</li>
                    <li>Answer as honestly as you can.</li>
                  </ul>
                </div>
              <StartButton onClick={this.props.handleClick}>
                <div>
                  Start
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </StartButton>
            </IntroCard>
            )}
            </Transition>
          </Row>
        </Grid>
    );
  }
}

export default Introduction;
