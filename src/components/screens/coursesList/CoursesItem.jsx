/* eslint-disable react/jsx-one-expression-per-line */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CoursesItem({ course }) {
  let status = '';
  let color = '';
  switch (course.status) {
    case 'Created':
      status = 'Создан';
      color = 'secondary';
      break;
    case 'OpenForAssigning':
      status = 'Открыт для записи';
      color = 'success';
      break;
    case 'Started':
      status = 'В процессе обучения';
      color = 'primary';
      break;
    case 'Finished':
      status = 'Закрыт';
      color = 'danger';
      break;
    default:
      break;
  }
  let courseSemester = '';
  switch (course.semester) {
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
    <div>
      <Card>
        <Card.Body className="row text-decoration-none" as={Link} to={`/courses/${course.id}`}>
          <Card.Title className="col-6 fs-4 mb-0 pb-0">{course?.name}</Card.Title>
          <Card.Text className={`col-6 text-end fw-bold text-${color}`}>{status}</Card.Text>
          <Card.Text className="col-12 fs-5 pb-0 mb-0">
            Учебный год - {course?.startYear} - {Number(course?.startYear) + 1}
          </Card.Text>
          <Card.Text className="col-12 fs-5 pb-0 mb-0">Семестр - {courseSemester}</Card.Text>
          <Card.Text className="col-12 fs-6 text-muted pb-0 mb-0">
            Мест всего - {course?.maximumStudentsCount}
          </Card.Text>
          <Card.Text className="col-12 fs-6 text-muted pb-0 mb-0">
            Мест свободно - {course?.remainingSlotsCount}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CoursesItem;
