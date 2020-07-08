import React, { Component } from "react";
import "./App.css";

// components
import Introduction from "./components/Introduction";
import QuizCard from './components/QuizCard'; 

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showQuestion : false,
        showAnimation: false
      }
  }

  clickStartButton = () => {
    this.setState({ showAnimation: true });
    setTimeout(() => {this.setState({ showQuestion: true })},
    2000)
  }
  
  renderQuestion = () => {
    return <QuizCard />
  }

  renderIntro = () => {
    return <Introduction handleClick={() => this.clickStartButton()} animation={this.state.showAnimation}/>
  }

  animateStart = () => {
   
    


  }

  render() {
    let question = this.state.showQuestion;

    if(question) {
      return this.renderQuestion();
    } else {
      return this.renderIntro();
    }
  }
}

export default App;
