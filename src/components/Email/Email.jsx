import React from "react";
import { Form, FloatingLabel } from 'react-bootstrap';

const Email = (props) => {
    const { email, setEmail, emailError, validateEmail, birthDate } = props;

    return (
        <Form.Group>
            <FloatingLabel className="form-group">
                <Form.Control
                    type="email"
                    placeholder="Email address"
                    required
                    disabled={birthDate === ""}
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        validateEmail(event);
                    }}
                />
                <Form.Label>Email address</Form.Label>
            <Form.Text style={{ color: '#cc0000' }}>{emailError}</Form.Text>
            </FloatingLabel>
        </Form.Group>

    );
}

export default Email;
