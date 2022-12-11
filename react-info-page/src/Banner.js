import React from "react";

// Props Example with ES6 Class Component, need to use this.props in ES6 Components
class Banner extends React.Component {
    render(props) {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}



// Props Example with Simple Functional Component 
// const Banner = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// };


export default Banner