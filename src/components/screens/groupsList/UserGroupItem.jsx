import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styles from './Groups.module.css';

function UserGroupItem({ id, groupName }) {
  return (
    <div>
      <Card>
        <Card.Body className="p-2 px-3">
          <Card.Link as={Link} to={`/groups/${id}`} className={`text-decoration-none text-reset ${styles.cardText}`}>
            {groupName}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserGroupItem;
