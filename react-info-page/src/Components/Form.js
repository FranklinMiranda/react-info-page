import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div className='Form'>
    <form>
      <fieldset>
        <legend>Contact Form:</legend>
        <label for="fname">First Name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="Franklin"></input>
        <br />
        <label for="lname">Last Name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Miranda"></input>
        <br />
        <label for="reference">How did you hear about this page?</label>
        <select id="reference" name="reference">
          <option value="In-Person">In-Person</option>
          <option value="Google">Google</option>
          <option value="Web Search">Web Search</option>
          <option value="Print Media">Print Media</option>
        </select>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
    </div>
    )
  }
}

export default Form
