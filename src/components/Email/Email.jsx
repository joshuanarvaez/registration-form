import React, { useState } from "react";
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
                    muted
                    disabled={birthDate === ''}
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

    );
}

export default Email;
