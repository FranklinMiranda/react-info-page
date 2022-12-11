import React from 'react';
import NavBar from './Nav';
import Info from './Info';
import Table from './Table';
import Form from './Form';
import Banner from './Banner';

class App extends React.Component {
  render() {
    return (
      <div>
        <Banner name="Franklin"/>
        <Banner name="Miranda"/>
        <NavBar />
        <Info />
        <Table />
        <Form />
      </div>
    );
  }
}

export default App;
