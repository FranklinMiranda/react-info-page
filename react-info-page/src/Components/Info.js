import React from 'react';

// This Info Component imports data from a JavaScript file and renders in HTML tags to the DOM
// Target set to blank opens the hyperlink in a new tab instead of the current tab
class Info extends React.Component {
  render(props) {
    return (
      <div className="Info">
        <h4><a href={this.props.hyperlink} target="_blank">{this.props.name}</a></h4>
      </div>
    );
  }
}

export default Info;
 