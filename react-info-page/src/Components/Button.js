import React from 'react';

// Button Component example that used state object to store a value and uses a button to toggle that value between two numbers
// This in the handleClick Method has to be bound to the this in the Class Scope using Bind
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { binary: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.binary === 0) {
      this.setState({ binary: 1 });
    } else if (this.state.binary === 1) {
      this.setState({ binary: 0 });
    }
  }

  render() {
    return (
      <div className="Button">
        <h1>Binary: {this.state.binary}</h1>
        <button onClick={this.handleClick}>Binary Toggle</button>
      </div>
    );
  }
}

export default Button;
