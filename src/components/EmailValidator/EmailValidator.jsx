// import React, { useState } from "react";
// import validator from 'validator'
// import { Form, FloatingLabel } from 'react-bootstrap';
// const EmailValidator = () => {

//     const [emailError, setEmailError] = useState('')
//     const validateEmail = (e) => {
//         let email = e.target.value

//         if (validator.isEmail(email)) {
//             setEmailError('')
//         } else {
//             setEmailError('Please enter a valid email.')
//         }
//     }

//     return (
//         <FloatingLabel className="form-group">
//             <Form.Control
//                 type="email"
//                 placeholder="Email address"
//                 required
//                 muted
//                 value={email}
//                 onChange={(event) => {
//                     setEmail(event.target.value);
//                     validateEmail(event);
//                 }}
//             />
//             <Form.Label>Email address</Form.Label>
//             <Form.Text>{emailError}</Form.Text>
//         </FloatingLabel>

//     );
// }

// export default EmailValidator;
