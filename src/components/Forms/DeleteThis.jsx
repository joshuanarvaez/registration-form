// const SignUpForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [date, setDate] = useState('');
//   const [location, setLocation] = useState('');
//   const [gender, setGender] = useState('');
//   const [occupation, setOccupation] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     isValidPassword(password, confirmPassword);
//     console.log({ firstName, lastName, date, location, gender, occupation, username, email, password });
//   }

//   const isValidPassword = (password, confirmPassword) => {
//     // Your password must be 7-10 characters long. It must include one uppercase letter, one lowercase letter, one number, and one special character. The password and confirm password fields must match.
   
//   }

//    const lowercase = /[a-z]/;
//     const uppercase = /[A-Z]/;
//     const number = /[0-9]/;
//     const special = /[!@#\$%\^&\*]/;
//     const length = /.{7,10}/;

//     // Potential Outcomes

//     if (password !== confirmPassword) {
//       // check if passwords match
//       setErrorMessage('Passwords do not match.');
//       return false;
//     } else if (!length.test(password)) {
//       // password not long enough
//       setErrorMessage('Your password must be 7-10 characters.');
//     } else if (length && lowercase) {
//       // length & lowercase
//       setErrorMessage('Your password must include atleast one uppercase letter, one number, and one special character.');
//     } 
//     else if (length && uppercase) {
//       // length & uppercase
//       setErrorMessage('Your password must include atleast one uppercase letter, one number, and one special character.');
//     } 
//     else if (length && number) {
//       // length & number
//       setErrorMessage('Your password must include atleast one lowercase letter, one uppercase letter, and one special character.');
//     } 
//     else if (length && special) {
//       // length & special
//       setErrorMessage('Your password must include atleast one lowercase letter, one uppercase letter, and one number.');
//     }     else if (!lowercase) {
//       // no lowercase
//       setErrorMessage('Your password must include atleast one lowercase letter.');
//     } else if (lowercase.test(password)) {
//       //only lowercase
//       setErrorMessage('Your password must include atleast one uppercase letter, one number, and one special character.');
//     } else if (lowercase && uppercase) {
//       // lowercase and uppercase only
//       setErrorMessage('Your password must include atleast one number and one special character.');
//     } else if (lowercase && number) {
//       // lowercase and numbers only
//       setErrorMessage('Your password must include atleast one uppercase letter and one special character');
//     } else if (lowercase && special) {
//       // lowercase and special character only
//       setErrorMessage('Your password must include atleast one uppercase letter and one number');
//     } else if (!uppercase.test(password)) {
//       // no uppercase
//       setErrorMessage('Your password must include atleast one uppercase letter.');
//     } else if (uppercase.test(password)) {
//       // uppercase only
//       setErrorMessage('Your password must include atleast one lowercase letter, one number, and one special character.');
//     } else if (uppercase && number) {
//       // uppercase and numbers 
//       setErrorMessage('Your password must include atleast one lowercase letter and one special character.');
//     } else if (uppercase && special) {
//       // uppercase and special
//       setErrorMessage('Your password must include atleast one lowercase letter and one number.');
//     } else if (!number.test(password)) {
//       // no numbers
//       setErrorMessage('Your password must include atleast one number.');
//     } else if (number.test(password)) {
//       // only numbers
//       setErrorMessage('Your password must include atleast one lowercase letter, one uppercase letter, and one special character.');
//     } else if (number && special) {
//       // number and special
//       setErrorMessage('Your password must include atleast one lowercase letter and one uppercase letter.');
//     } else if (!special.test(password)) {
//       // no special characters
//       setErrorMessage('Your password must include atleast one special character.');
//     } else if (special.test(password)) {
//       // only special characters
//       setErrorMessage('Your password must include atleast one lowercase letter, one uppercase letter, and one number.');
//     } else {
//       alert('Thank you for registering!');
//       return true;
//     }

//   return (
//     <div className="container">
//       <Card className="SignUpForm">
//         <Card.Body>
//           <Form onSubmit={handleSubmit}>
//             <Row>
//               <Col xs={12} md={4}>
//                 <FloatingLabel className="form-group">
//                   <Form.Control
//                     type="text"
//                     required
//                     value={firstName}
//                     placeholder="First name"
//                     onChange={(event) => setFirstName(event.target.value)}
//                   />
//                   <Form.Label>First name</Form.Label>
//                 </FloatingLabel>
//               </Col>
//               <Col xs={12} md={4}>
//                 <FloatingLabel className="form-group">
//                   <Form.Control
//                     type="text"
//                     required
//                     value={lastName}
//                     placeholder="Last name"
//                     onChange={(event) => setLastName(event.target.value)}
//                   />

//                   <Form.Label>Last name</Form.Label>
//                 </FloatingLabel>
//               </Col>
//               <Col xs={12} md={4}>
//                 <Form.Group controlId="duedate" type="date">
//                   <FloatingLabel className="form-group">
//                     <Form.Control
//                       type="date"
//                       name="duedate"
//                       required
//                       value={date}
//                       onChange={(event) => setDate(event.target.value)}
//                     />
//                     <Form.Label>Birth date</Form.Label>
//                   </FloatingLabel>
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={12} md={4}>
//                 <Form.Control
//                   as="select"
//                   aria-label="Default select example"
//                   value={gender}
//                   onChange={(event) => setGender(event.target.value)}
//                   required
//                 >
//                   <option value="">Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Non-binary">Non-binary</option>
//                   <option value="Prefer not to say">Prefer not to say</option>
//                 </Form.Control>

//               </Col>
//               <Col xs={12} md={4}>
//                 <Form.Control
//                   as="select"
//                   aria-label="Default select example"
//                   value={occupation}
//                   onChange={(event) => setOccupation(event.target.value)}
//                   required
//                 >
//                   {Object.keys(occupationOptions).map(key => (
//                     <option key={key} value={occupationOptions[key]}>{key}</option>
//                   ))}
//                 </Form.Control>

//               </Col>
//               <Col xs={12} md={4}>
//                 <Form.Control
//                   as="select"
//                   aria-label="Default select example"
//                   value={location}
//                   onChange={(event) => setLocation(event.target.value)}
//                   required
//                 >
//                   {Object.keys(locOptions).map(key => (
//                     <option key={key} value={locOptions[key]}>{key}</option>
//                   ))}
//                 </Form.Control>

//               </Col>
//             </Row>
//             <Row xs={1} md={2}>
//               <Col>
//                 <FloatingLabel className="form-group">
//                   <Form.Control
//                     type="email"
//                     placeholder="Email address"
//                     required
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value)}
//                   />
//                   <Form.Label>Email address</Form.Label>
//                 </FloatingLabel>
//               </Col>
//               <Col>
//                 <InputGroup hasValidation>
//                   <FloatingLabel className="form-group">
//                     <Form.Control
//                       type="text"
//                       placeholder="Username"
//                       required
//                       value={username}
//                       onChange={(event) => setUsername(event.target.value)}
//                     />
//                     <Form.Label>Username</Form.Label>
//                   </FloatingLabel>

//                 </InputGroup>
//               </Col>
//             </Row>

//             <Row xs={1} md={2}>
//               <Col>
//                 <FloatingLabel className="form-group">
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     required
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                   />
//                   <Form.Label>Password</Form.Label>
//                 </FloatingLabel>
//               </Col>
//               <Col>
//                 <FloatingLabel className="form-group">
//                   <Form.Control
//                     type="password"
//                     placeholder="Confirm Password"
//                     required
//                     value={confirmPassword}
//                     onChange={(event) => setConfirmPassword(event.target.value)}
//                   />
//                   <Form.Label>Confirm Password</Form.Label>
//                 </FloatingLabel>
//               </Col>
//               <Form.Text id="passwordHelpBlock" muted>
//                 Your Password must be 7-10 characters long. It must include one uppercase letter, one lowercase letter, one number, and one special character.
//               </Form.Text>
//             </Row>
//             {errorMessage && <Form.Text className="text-danger">{errorMessage}</Form.Text>}

//             <Button variant="primary" type="submit" className="btn btn-primary btn-block">
//               Register
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );

// };

// export
//   default SignUpForm;


