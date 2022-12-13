import React from 'react';

// Clock component that uses state to store a time value and time of Day value and then uses lifecycle methods to start and stop a timer that updates the Clock
// The Component also includes a if statement that updates the state object with Time of Day and then updates the DOM with the time of Day
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(), timeOfDay: '' };
  }

  // componentDidMount only runs once, when the component is inserted into the DOM so the setInterval method begins to run at the designated interval
  // An ID is assigned to the setInterval Function that can be passed to the clearInterval function when setInterval is to stop executing
  componentDidMount() {
    return (this.timeID = setInterval(() => {
      return this.tick();
    }, 1000));
  }

  // componentWillUnmount only runs once if the Clock component is removed so the timer is stopped
  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });

    const hours = this.state.time.getHours();

    if (hours < 12) {
      this.setState({
        timeOfDay: 'Morning',
      });
    } else if (hours >= 12 && hours < 16) {
      this.setState({ timeOfDay: 'Afternoon' });
    } else {
      this.setState({ timeOfDay: 'Night' });
    }
  }

  render() {
    return (
      <div className="Clock">
        <h1>This is the current time: {this.state.time.toLocaleTimeString()}</h1>
        <h1>Good {this.state.timeOfDay}!</h1>
      </div>
    );
  }
}

export default Clock;
