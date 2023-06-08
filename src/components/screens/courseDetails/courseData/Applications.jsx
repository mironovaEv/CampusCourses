import Card from 'react-bootstrap/Card';

function CourseApplications({ applications }) {
  return (
    <Card className="rounded-0">
      <Card.Body className="py-2">
        <Card.Text className="mb-0 fw-bold">Заявок на рассмотрении</Card.Text>
        <Card.Text>{applications}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CourseApplications;
