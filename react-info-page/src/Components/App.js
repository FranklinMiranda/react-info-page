import React from 'react';
import NavBar from './Nav';
import Info from './Info';
import Table from './Table';
import Form from './Form';
import Banner from './Banner';
import Clock from './Clock'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner name="Franklin Miranda"/>
        <Clock />
        <Info />
        <Table />
        <Form />
      </div>
    );
  }
}

export default App;
