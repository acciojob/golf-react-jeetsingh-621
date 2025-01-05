import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" }, 
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Handle Start Button Click
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Cleanup event listener to prevent memory leaks
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Handle the Right Arrow key press to move the ball
  handleKeyDown(event) {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => {
        const currentLeft = parseInt(prevState.ballPosition.left, 10);
        return {
          ballPosition: { left: `${currentLeft + 5}px` },
        };
      });
    }
  }

  // Render either the ball or the button
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
