import React, { useState } from 'react';
import { Form, Fade, FloatingLabel } from 'react-bootstrap';
import PasswordCheckList from './PasswordChecklist';
import { CSSTransition } from 'react-transition-group';
import PasswordGenerator from './PasswordGenerator/PasswordGenerator';

const Password = (props) => {
  const { password, setPassword, confirmPassword, onChange, email } = props;

  const [showGenerator, setShowGenerator] = useState(false);

  return (
    <Form.Group>
      <FloatingLabel className="form-group">
        <Form.Control
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={email === ''}
        />
        <Form.Label>Password</Form.Label>
      </FloatingLabel>
      {!showGenerator && (
        <Form.Text id="passwordHelpBlock" onClick={() => setShowGenerator(!showGenerator)}>
          Please create a strong password with at least 7 characters or use the <a href="#" className='generator-link'> Password Generator</a>.
        </Form.Text>
      )}
      <CSSTransition
        in={showGenerator}
        timeout={{ enter: 1000, exit: 1000}}
        classNames="my-fade"
        unmountOnExit
      >
        <div>
          <PasswordGenerator />
        </div>
      </CSSTransition>
      <PasswordCheckList
        password={password}
        confirmPassword={confirmPassword}
        onChange={onChange}
      />
    </Form.Group>
  ); 
};

export default Password;
