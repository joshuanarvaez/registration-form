import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap';

const BirthDate = (props) => {
    const { birthDate, setBirthDate, dateError, setDateError, lastName } = props;

    const validateDate = () => {
      const currentDate = new Date();
      if (birthDate > currentDate) {
        setDateError(null);
      } else {
        setBirthDate();
      }
    }

  return (
    <Form.Group controlId="birthdate" type="date">
                  <FloatingLabel className="form-group">
                    <Form.Control
                      type="date"
                      name="birthdate"
                      required
                      value={birthDate}
                      onBlur={validateDate}
                      setBirthDate={setBirthDate}
                      disabled={lastName === ""}
                    />
                    <Form.Label>Birth date</Form.Label>
                  </FloatingLabel>
                  {dateError && <div className="error">{dateError}</div>}
                </Form.Group>
  )
}

export default BirthDate;