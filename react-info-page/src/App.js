import React from 'react';
import Info from './Info';
import Table from './Table';
import NavBar from './Nav';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Info />
        <Table />
        <Form />
      </div>
    );
  }
}

export default App;
