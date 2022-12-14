import React from 'react';

// This Info Component imports data from a JavaScript file and renders in HTML tags to the DOM
// Target set to blank opens the hyperlink in a new tab instead of the current tab
// Conditional Rendering is achieved by wrapping the tag to conditionally render in curly brackets and then including the conditional before the tag followed by &&


class Info extends React.Component {
  render(props) {
    return (
      <div className="Info">
        {this.props.hyperlink && <h4><a href={this.props.hyperlink} target="_blank">{this.props.name}</a></h4>}
      </div>
    );
  }
}

export default Info;
 