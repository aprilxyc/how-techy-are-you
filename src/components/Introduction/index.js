import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

// style-components
import { IntroCard } from "../../utils/Cards";

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

  render() {
    const { animationToggle } = this.props;
    return (
      <div>
        {animationToggle ? (
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
        ) : (
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
        )}
      </div>
    );
  }
}

export default Introduction;
