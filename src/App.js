import React, { Component } from "react";
import "./App.css";

// components
import Introduction from "./components/Introduction";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">How techy are you?</header>
          <Introduction />
      </div>
    );
  }
}


export default App;
