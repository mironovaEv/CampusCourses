/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import EditCourseStatusModal from '../modals/EditCourseStatusModal';
import { SignUpCourseThunkCreator } from '../../../../reducers/courseDetail-reducer';

function CourseStatus({ id, status, isAdmin, isTeacher, isStudent }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  let statusCode = 0;
  let courseStatus = '';
  let color = '';
  switch (status) {
    case 'Created':
      courseStatus = 'Создан';
      color = 'secondary';
      break;
    case 'OpenForAssigning':
      courseStatus = 'Открыт для записи';
      color = 'success';
      statusCode = 1;
      break;
    case 'Started':
      courseStatus = 'В процессе';
      color = 'primary';
      statusCode = 2;
      break;
    case 'Finished':
      courseStatus = 'Завершен';
      color = 'danger';
      statusCode = 3;
      break;
    default:
      break;
  }
  let visible = 'd-none';
  if (isTeacher || isAdmin) {
    if (statusCode === 3) {
      visible = 'disabled';
    } else {
      visible = '';
    }
  }
  const onClick = () => {
    dispatch(SignUpCourseThunkCreator(id));
  };

  return (
    <div>
      <Card className="rounded-0">
        <Card.Body className="row py-2">
          <div className="col-6">
            <Card.Text className="mb-0 fw-bold">Статус курса</Card.Text>
            <Card.Text className={`text-${color}`}>{courseStatus}</Card.Text>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <Button className={visible} variant="warning" type="button" onClick={() => setShow(true)}>
              ИЗМЕНИТЬ
            </Button>
            <Button
              onClick={onClick}
              className={`${!isTeacher && !isStudent && statusCode === 1 ? '' : 'd-none'} ms-2`}
              variant="success"
              type="button"
            >
              ЗАПИСАТЬСЯ НА КУРС
            </Button>
          </div>
        </Card.Body>
      </Card>
      <EditCourseStatusModal id={id} status={statusCode} show={show} onHide={handleClose} />
    </div>
  );
}

export default CourseStatus;
