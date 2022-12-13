import React from 'react';

// Props Example with ES6 Class Component, need to use this.props.name in ES6 Components
class Banner extends React.Component {
  render(props) {
    return (
      <div className='Banner'>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

// Props Example with Simple Functional Component, only use props.name
// const Banner = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// };

export default Banner;
