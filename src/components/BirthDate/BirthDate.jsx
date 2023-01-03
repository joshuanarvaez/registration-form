import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap';

const BirthDate = (props) => {
  const { birthDate, setBirthDate, dateError, setDateError, lastName } = props;

  const validateBirthDate = (e) => {
    const currentDate = new Date();
    const date = new Date(e.target.value);
  
    if (date <= currentDate) {
      setDateError('');
    } else {
      setDateError('Please enter a valid date');
    }
    console.log(dateError);
  }
  
  return (
    <Form.Group controlId="birthdate" type="date">
      <FloatingLabel className="form-group">
        <Form.Control
          type="date"
          name="birthdate"
          required
          value={birthDate}
          disabled={lastName === ""}
          onChange={(event) => { setBirthDate(event.target.value); validateBirthDate(event);
          }}
        />
        <Form.Label>Birth date</Form.Label>
      </FloatingLabel>
      <Form.Text style={{color: '#cc0000'}}>{dateError}</Form.Text>
    </Form.Group>
  )
}

export default BirthDate;
