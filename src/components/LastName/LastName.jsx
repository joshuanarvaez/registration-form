import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

const LastName = (props) => {

    const { lastName, setLastName, firstName } = props;
  return (
    <Form.Group>
                  <FloatingLabel className="form-group">
                    <Form.Control
                      type="text"
                      required
                      value={lastName}
                      placeholder="Last name"
                      onChange={(event) => setLastName(event.target.value)}
                      disabled={firstName === ""}
                    />

                    <Form.Label>Last name</Form.Label>
                  </FloatingLabel>
                </Form.Group>
  )
}

export default LastName