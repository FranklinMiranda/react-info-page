import React from 'react';

const Clock = () => {
  return (
    <div>
      <h1>Hello, React this is a simple Clock</h1>
      <h2>The current time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;

