import Card from 'react-bootstrap/Card';

function Teacher({ teacher }) {
  const isMain = teacher.isMain ? '' : 'd-none';
  return (
    <Card className="border-0 border-bottom rounded-0">
      <Card.Body className="p-2">
        <div className="d-flex">
          <Card.Text className="fw-bold m-0">{teacher.name}</Card.Text>
          <Card.Text className={`text-wrap bg-success badge ms-2 ${isMain}`}>основной</Card.Text>
        </div>

        <Card.Text className="text-muted">{teacher.email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Teacher;
