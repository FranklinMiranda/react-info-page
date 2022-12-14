import React from 'react';

// This Info Component imports data from a JavaScript file and renders in HTML tags to the DOM
class Info extends React.Component {
  render(props) {
    return (
      <div>
        <h1>Name : {this.props.name}</h1>
        <h1>Link : {this.props.link}</h1>
      </div>
    );
  }
}

export default Info;
