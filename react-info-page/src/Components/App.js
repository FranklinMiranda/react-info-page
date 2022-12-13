import React from 'react';
import NavBar from './Nav';
import Main from './Main';
import Table from './Table';
import Form from './Form';
import Banner from './Banner';
import Clock from './Clock';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <div className="Container">
        <NavBar />
        <Banner name="Franklin Miranda"/>
        <Clock />
        <Main />
        <Table />
        <Contact name='Franklin Miranda' email='fdm61344@gmail.com' number='(610)-299-8002'/>
        <Form />
      </div>
    );
  }
}

export default App;
