import React from 'react';

// A Table Component that renders out information about companies that use React
class Table extends React.Component {
  render() {
    return (
      <div className='Table'>
        <table>
          <h3>Companies that use React:</h3>
          <tr>
            <th>Name</th>
            <th>Founding Year</th>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>2004</td>
          </tr>
          <tr>
            <td>Dropbox</td>
            <td>2008</td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>2010</td>
          </tr>
          <tr>
            <td>Airbnb</td>
            <td>2008</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
