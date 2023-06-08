import Card from 'react-bootstrap/Card';

function Notifications({ notification }) {
  let classString = 'p-2';
  if (notification.isImportant) {
    classString = 'p-2 text-danger bg-danger bg-opacity-25';
  }
  return (
    <Card className="border-0 border-bottom rounded-0">
      <Card.Body className={classString}>{notification.text}</Card.Body>
    </Card>
  );
}

export default Notifications;
