import React from 'react';
import NavBar from './Nav';
import Main from './Main';
import Table from './Table';
import Form from './Form';
import Banner from './Banner';
import Clock from './Clock'

class App extends React.Component {
  render() {
    return (
      <div className="Container">
        <NavBar />
        <Banner name="Franklin Miranda"/>
        <Clock />
        <Main />
        <Table />
        <Form />
      </div>
    );
  }
}

export default App;
