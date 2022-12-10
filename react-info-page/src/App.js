import React from 'react';
import Image from './logo192.png'


class App extends React.Component {
  render() {
    return (
      <div>
        <img src={Image} alt="React" width='180px'></img>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Franklin</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Anna</td>
            <td>21</td>
          </tr>        
        </table>

      </div>
    )
  }
}

export default App