/* eslint-disable react/jsx-one-expression-per-line */
import Card from 'react-bootstrap/Card';

function CourseYearSemester({ year, semester }) {
  let courseSemester = '';
  switch (semester) {
    case 'Spring':
      courseSemester = 'Весенний';
      break;
    case 'Autumn':
      courseSemester = 'Осенний';
      break;
    default:
      break;
  }
  return (
    <Card className="rounded-0">
      <Card.Body className="row py-2">
        <div className="col-6">
          <Card.Text className="mb-0 fw-bold">Учебный год</Card.Text>
          <Card.Text>
            {year} - {Number(year) + 1}
          </Card.Text>
        </div>
        <div className="col-6">
          <Card.Text className="mb-0 fw-bold">Семестр</Card.Text>
          <Card.Text>{courseSemester}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseYearSemester;
