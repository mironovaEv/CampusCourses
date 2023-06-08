import Card from 'react-bootstrap/Card';

function CoursePlacesStudents({ places, students }) {
  return (
    <Card className="rounded-0">
      <Card.Body className="row py-2">
        <div className="col-6">
          <Card.Text className="mb-0 fw-bold">Всего мест</Card.Text>
          <Card.Text>{places}</Card.Text>
        </div>
        <div className="col-6">
          <Card.Text className="mb-0 fw-bold">Студентов зачислено</Card.Text>
          <Card.Text>{students}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CoursePlacesStudents;
