import React from 'react';
import NavBar from './Nav';
import Info from './Info';
import Table from './Table';
import Form from './Form';

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
