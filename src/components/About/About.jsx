import React from 'react';
import CountryDropdown from 'country-dropdown-with-flags-for-react';  
import './CountryDropdown.css'; // Add this line to import the custom CSS styles

const About = () => (
  <div className="country-dropdown-container">
    <CountryDropdown 
      className="country-dropdown"
      preferredCountries={['us', 'pr', 'ca', 'mx' ]} 
      value="" 
      handleChange={e => console.log(e.target.value)} 
    ></CountryDropdown>
  </div>
);

export default About;
