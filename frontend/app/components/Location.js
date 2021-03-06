import React from 'react';

const Location = React.createClass({
  submitLocation: function() {
    let locationInput = document.getElementById('location-input').value;
    console.log(locationInput);
  },
  render: function() {
    return(
      <form>
        <label>
          // search by location //
          <div className="dropDown">
            <h3>By Location:</h3>
              <select onChange={this.props.onChangeLocation}>
                  <option placeholder='select location' value=''>select location</option>
                  <option value='Chelsea'>Chelsea</option>
                  <option value='Financial District'>Financial District</option>
                  <option value='Flatiron'>Flatiron</option>
                  <option value='Hells Kitchen'>Hells Kitchen</option>
                  <option value='Meatpacking'>Meatpacking</option>
                  <option value='Midtown East'>Midtown East</option>
                  <option value='Soho'>Soho</option>
                  <option value='Tribeca'>Tribeca</option>
                  <option value='Upper East'>Upper East</option>
                  <option value='Upper West'>Upper West</option>
              </select>
          // <h3>Enter your location</h3>
          <br/>
          <input type="text" class= "userInput" onChange={this.submitLocation}></input>&nbsp;
          <button type="button">Go</button>
        </label>
      </form>
    )
  }
});

export default Location;
