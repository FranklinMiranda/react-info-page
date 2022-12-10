import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <div>
        <table>
          <h3>Contacts Table</h3>
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
    );
  }
}

export default Table;
