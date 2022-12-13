import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './Components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// Stateless Functional Component Clock Example with setInterval
// const Clock = () => {
//   const element = (
//     <div>
//       <h1>This is a Simple Functional Component telling the Time!</h1>
//       <h2>This is the current time {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   root.render(element)
// }
// setInterval(Clock, 1000)

