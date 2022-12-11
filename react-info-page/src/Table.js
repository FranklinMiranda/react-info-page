import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <div>
        <table>
          <h3>Companies that use React</h3>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Dropbox</td>
            <td>14</td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Airbnb</td>
            <td>14</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
