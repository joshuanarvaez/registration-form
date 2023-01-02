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


 {/* <Col xs={12} md={2} className="px-3">
                <Form.Group>
                <FloatingLabel className="form-group">
                  <Form.Select
                    value={occupation}
                    onChange={(event) => setOccupation(event.target.value)}
                    required
                  >
                    {Object.keys(occupationOptions).map(key => (
                      <option key={key} value={occupationOptions[key]}>
                        {key}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Label>Select</Form.Label>
                  </FloatingLabel>
                </Form.Group>
              </Col> */}