import React from 'react';

export class Thoughts extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText("?");
    }, 50);
  }

  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.interval);
  }

  render() {
    return (
      <button onClick = {this.props.toggle}>
      Enough!
      </button>
    );
  }
}