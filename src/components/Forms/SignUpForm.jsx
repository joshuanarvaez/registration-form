/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { Card, Form, Button, FloatingLabel, InputGroup, Col, Row, Container } from 'react-bootstrap';
import './SignUpForm.css';
import occupationOptions from '../../helpers/occupationOptions';
import PasswordCheckList from './PasswordChecklist';
import validator from 'validator';
import CountryDropdown from 'country-dropdown-with-flags-for-react';

// import CountrySelect from 'react-bootstrap-country-select';



const SignUpForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState(''); //might be happening because we are calling location importing About
  const [occupation, setOccupation] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);


  const handlePasswordChange = (isValid) => {
    setIsValidForm(isValid);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidForm) {
      console.log({ firstName, lastName, date, location, gender, occupation, username, email, password });
      console.log(firstName + ', thank you for registering!');
      event.target.reset();
    } else {
      alert('Please make sure all the required fields are filled and the passwords are valid');
    }
  }

  const validateEmail = (e) => {
    let email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Please enter a valid email.')
    }
  }


  return (
    <Container>
      <Card className="SignUpForm">
        <Row className="mx-auto py-3">
          <Form.Text id="passwordHelpBlock" muted>
            Please complete every field in this form to register your account.
          </Form.Text>
        </Row>

        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="py-3">
              <Col xs={12} md={3} className="px-3">
                <Form.Group>
                  <FloatingLabel className="form-group">
                    <Form.Control
                      type="text"
                      required
                      value={firstName}
                      placeholder="First name"
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                    <Form.Label>First name</Form.Label>
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col xs={12} md={3} className="px-3">
                <Form.Group>
                  <FloatingLabel className="form-group">
                    <Form.Control
                      type="text"
                      required
                      value={lastName}
                      placeholder="Last name"
                      onChange={(event) => setLastName(event.target.value)}
                    />

                    <Form.Label>Last name</Form.Label>
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col xs={8} md={2} className="px-3">
                <Form.Group controlId="duedate" type="date">
                  <FloatingLabel className="form-group">
                    <Form.Control
                      type="date"
                      name="duedate"
                      required
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                    />
                    <Form.Label>Birth date</Form.Label>
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col xs={12} md={2} className="px-3">
                <Form.Group>
                  <Form.Control
                    as="select"
                    aria-label="Default select example"
                    value={occupation}
                    onChange={(event) => setOccupation(event.target.value)}
                    required
                  >
                    {Object.keys(occupationOptions).map(key => (
                      <option key={key} value={occupationOptions[key]}>
                        {key}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="py-3">
              <Col xs={12} md={4} className="px-3">
                <Form.Group>
                    <CountryDropdown
                      className="country-dropdown"
                      preferredCountries={['us', 'pr', 'ca', 'mx']}
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      required
                    />
                </Form.Group>
              </Col>

            </Row>

            <Row className="py-3">
              <Col xs={12} md={4} className="px-3">
                <Form.Group>
                  <FloatingLabel className="form-group">
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      required
                      muted
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        validateEmail(event);
                      }}
                    />
                    <Form.Label>Email address</Form.Label>
                    <Form.Text style={{ color: '#ff0232' }}>{emailError}</Form.Text>
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>

            <Form.Text id="passwordHelpBlock" muted inline>
              Please create a strong password with at least 7 characters. Your password must include one uppercase letter, one lowercase letter, one number, and one special character. Create it yourself or use the password generator.
            </Form.Text>

            <Row className="py-3">
              <Col xs={12} md={3} className="px-3">
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

                  <PasswordCheckList
                    password={password}
                    // setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    rules={["minLength", "specialChar", "number", "capital", "match"]}
                    minLength={7}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={3} className="px-3">
                <Form.Group>
                  <FloatingLabel className="form-group">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(event) => { setConfirmPassword(event.target.value) }}
                    />
                    <Form.Label>Confirm Password</Form.Label>
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>

            {isValidForm ? (
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            ) : null}

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );

};

export default SignUpForm













