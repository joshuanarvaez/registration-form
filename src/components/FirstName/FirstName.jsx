import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

const FirstName = (props) => {
const { firstName, setFirstName } = props;
return (
<Form.Group>
<FloatingLabel className="form-group">
<Form.Control
type="text"
required
value={firstName}
placeholder="First name"
onChange={(event) => setFirstName(event.target.value)}
autoFocus
/>
<Form.Label>First name</Form.Label>
</FloatingLabel>
</Form.Group>
)
}

export default FirstName;