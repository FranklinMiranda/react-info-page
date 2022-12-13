import React from 'react';

// A Contact Component that uses props and attributes to render out Contact Information
class Contact extends React.Component {
  render(props) {
    return (
      <div className="Contact">
        <h1>Contact Information</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>E-Mail: {this.props.email}</h2>
        <h2>Phone Number: {this.props.number}</h2>
      </div>
    );
  }
}

export default Contact;
