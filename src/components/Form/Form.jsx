import { useState } from 'react';
import { addUser } from 'redux/users/userActions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

function MyForm() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const options = {
    name: setName,
    mail: setMail,
  };

  const funcToConectActionToReducer = useDispatch();
  const state = useSelector(state => state);
  console.log(state);

  const onInputChange = e => {
    const { name, value } = e.target;
    options[name](value);
  };
  const onSubmit = e => {
    e.preventDefault();
    const isDuplicate = state.users.find(el => {
      return el.mail === mail;
    });
    console.log(isDuplicate);
    if (isDuplicate) {
      return alert(`this ${isDuplicate.name} is already exist `);
    }

    funcToConectActionToReducer(addUser({ name, mail }));
    setName('');
    setMail('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={mail}
          name="mail"
          onChange={onInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          name="name"
          onChange={onInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;
