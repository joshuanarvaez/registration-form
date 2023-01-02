import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import PasswordCheckList from './PasswordChecklist';

const Password = (props) => {
    const { password, setPassword, confirmPassword, onChange } = props;
  return (
    <Form.Group>
    <FloatingLabel className="form-group">
      <Form.Control
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Form.Label>Password</Form.Label>
    </FloatingLabel>
    <Form.Text id="passwordHelpBlock" >
      Please create a strong password with at least 7 characters or use the Password Generator
    </Form.Text>
    <PasswordCheckList
      password={password}
      confirmPassword={confirmPassword}
      onChange={onChange}
    />
  </Form.Group>
  )
}

export default Password