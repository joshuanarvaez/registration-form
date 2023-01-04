import React, { useState } from 'react';
import { Card, Form, Button, Col, Row, Container } from 'react-bootstrap';
import './RegistrationForm.css';
import validator from 'validator';
import { FirstName, LastName, BirthDate, Email, Password, ConfirmPassword } from '../index';


const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('');
  // const [generatedPassword, setGeneratedPassword] = useState('');
  // const [passwordLength, setPasswordLength] = useState(7);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);


  function handlePasswordChange() {
    if (password.length > 0 && confirmPassword === password) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }


  function handleSubmit(event) {
    event.preventDefault();

    if (firstName && lastName && birthDate && email && password && confirmPassword && !dateError && !emailError && password === confirmPassword) {
      console.log({ firstName, lastName, birthDate, email, password });
      // event.target.reset();
    } else {
      alert('Please fill out all fields in the form.');
    }
  }


  const validateEmail = (e) => {
    let email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Please enter a valid email.');
    }
  }

  return (
    <Container>
      <Card className="RegistrationForm">
        <Card.Header as="h1" className="bg-white text-center text-primary">Registration Form
        </Card.Header>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="py-3">
              {/* First Name Input Field */}
              <Col xs={12} md={4}>
                <FirstName firstName={firstName} setFirstName={setFirstName} />
              </Col>
              {/* Last Name Input Field */}
              <Col xs={12} md={4}>
                <LastName lastName={lastName} setLastName={setLastName} firstName={firstName} />
              </Col>
              {/* Birth Date Input Field */}
              <Col xs={12} md={4}>
                <BirthDate birthDate={birthDate} setBirthDate={setBirthDate} dateError={dateError} setDateError={setDateError} lastName={lastName} />

              </Col>
            </Row>

            <Row className="py-3">
              {/* Email Input Field */}
              <Col xs={12} md={4}>
                <Email
                  email={email}
                  setEmail={setEmail}
                  emailError={emailError}
                  validateEmail={validateEmail}
                  disabled
                  birthDate={birthDate}
                  dateError={dateError}
                />
                {/* <PasswordGenerator
                  generatedPassword={generatedPassword}
                  setGeneratedPassword={setGeneratedPassword}
                  passwordLength={passwordLength}
                  setPasswordLength={setPasswordLength}
                /> */}
              </Col>
              {/* Password Input Field */}
              <Col xs={12} md={4}>
                <Password password={password} setPassword={setPassword} confirmPassword={confirmPassword} onChange={handlePasswordChange} email={email}
                />
              </Col>
              {/* Confirm Password Input Field */}
              <Col xs={12} md={4}>
                <ConfirmPassword confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} password={password} />
              </Col>

            </Row>

            <div className="d-flex justify-content-center">
              <Button variant="primary" size="lg" type="submit" disabled={!isValidForm}>
                Register
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );

};
export default RegistrationForm;  