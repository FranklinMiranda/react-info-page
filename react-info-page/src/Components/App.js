import React from 'react';
import NavBar from './Nav';
import Main from './Main';
import Table from './Table';
import Form from './Form';
import Banner from './Banner';
import Clock from './Clock';
import Contact from './Contact';
import Button from './Button'
import Info from './Info';
import links from '../Data/InfoData';

// infoEl uses map method to map a array of link object's properties to attributes in the Info component and returns a array of filled in Info Components 
// The Div inserted into the App component with the infoEl const outputs a Info component for every object in the links array 
const infoEl = links.map(el => {
  return <Info name={el.name} hyperlink={el.hyperlink}/>
})

// The App Component is usually the main component that contains all the other child components 
class App extends React.Component {
   render() {
    return (
      <div className="Container">
        <NavBar />
        <Banner name="Franklin Miranda"/>
        <Clock />
        <Main />
        <div>
          {infoEl}
        </div>
        <Button />
        <Table />
        <Contact name='Franklin Miranda' email='fdm61344@gmail.com' number='(610)-299-8002'/>
        <Form />
      </div>
    );
  }
}

export default App;
