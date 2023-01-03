import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

const ConfirmPassword = (props) => {

  const { confirmPassword, setConfirmPassword, password } = props;
  return (
    <Form.Group>
      <FloatingLabel className="form-group">
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          disabled={password === ''}
          onChange={(event) => { setConfirmPassword(event.target.value) }}
        />
        <Form.Label>Confirm Password</Form.Label>
      </FloatingLabel>

    </Form.Group>
  )
}

export default ConfirmPassword