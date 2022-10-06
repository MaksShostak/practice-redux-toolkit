import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deleteUser } from 'redux/users/userActions';

function DefaultExample() {
  const { users } = useSelector(state => state);

  const dispatch = useDispatch();

  return (
    <>
      <ListGroup>
        {users.map(({ name, mail }) => (
          <ListGroup.Item key={mail}>
            <h4>{name}</h4>
            <p>{mail}</p>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                dispatch(deleteUser(mail));
              }}
            >
              Submit
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default DefaultExample;
