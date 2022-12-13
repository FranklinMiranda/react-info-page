import React from 'react';

class Contact extends React.Component {
  render(props) {
    return (
      <div className="Contact">
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        <h2>{this.props.number}</h2>
      </div>
    );
  }
}
