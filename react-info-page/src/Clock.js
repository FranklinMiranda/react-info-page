import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // componentDidMount only runs once, when the component is inserted into the DOM so the setInterval method begins to run at the designated interval
  // An ID is assigned to the setInterval Function that can be passed to the clearInterval function when setInterval is to stop executing
  componentDidMount() {
    return this.timeID = setInterval(() => {return this.tick()}, 1000);
  }

  // componentWillUnmount only runs once if the Clock component is removed so the timer is stopped
  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  tick() {
    this.setState({
        date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>This is the current time:</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
