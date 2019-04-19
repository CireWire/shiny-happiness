import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Thoughts } from './Thoughts';
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confused: false,
      text: ""
    };

    this.toggleConfusion = this.toggleConfusion.bind(this);
    this.addText = this.addText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleConfusion() {
    this.setState({
      confused: !this.state.confused
    });
  }

  setText(text) {
    this.setState({text: text});
  }

  addText(newText) {
    let text = this.state.text + newText;
    this.setState({text: text});
  }

  handleChange(e) {
    this.setText(e.target.value);
  }

  render() {
    let button;
    if (this.state.confused) {
      button = (
        <Thoughts toggle = {this.toggleConfusion} addText = {this.addText} />
      );
    } else {
      button = (
        <button onClick= {this.toggleConfusion}>
        Add Confusion!
        </button>
      );
    }

    return (
      <div>
      <h1>How confused are you?</h1>
      <textarea rows = '7' cols ='40' value = {this.state.text} onChange = {this.handleChange}>
      </textarea>
      {button}
      <h2>{this.state.text}</h2>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root')
);