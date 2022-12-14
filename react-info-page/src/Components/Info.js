import React from 'react';

// This Info Component imports data from a JavaScript file and renders in HTML tags to the DOM
class Info extends React.Component {
  render(props) {
    return (
      <div>
        <h2>Name : {this.props.name}</h2>
        <h2>Link : {this.props.hyperlink}</h2>
      </div>
    );
  }
}

export default Info;
