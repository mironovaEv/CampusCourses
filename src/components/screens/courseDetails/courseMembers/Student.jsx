/* eslint-disable react/jsx-one-expression-per-line */
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import MarksForStudents from './MarksForStudents';
import MarksForTeacherAdmin from './MarksForTeacherAdmin';
import { EditStudentStatusThunkCreator } from '../../../../reducers/courseDetail-reducer';

function marks(result) {
  let resultText = '';
  let resultColor = '';
  switch (result) {
    case 'NotDefined':
      resultText = 'Отметки нет';
      resultColor = 'secondary';
      break;
    case 'Passed':
      resultText = 'Успешно пройдено';
      resultColor = 'success';
      break;
    case 'Failed':
      resultText = 'Зафейлено';
      resultColor = 'danger';
      break;
    default:
      break;
  }
  return { resultText, resultColor };
}

function Student({ student, isTeacher, courseId }) {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.account.email);
  const isAdmin = useSelector((state) => state.account.roles.isAdmin);
  let isAccepted = false;
  let isInQueue = false;
  let studentStatus = '';
  let statusColor = '';
  switch (student.status) {
    case 'Accepted':
      studentStatus = 'принят в группу';
      statusColor = 'text-success';
      isAccepted = true;
      break;
    case 'Declined':
      studentStatus = 'отклонен';
      statusColor = 'text-danger';
      break;
    case 'InQueue':
      studentStatus = 'в очереди';
      statusColor = 'text-primary';
      isInQueue = true;
      break;
    default:
      break;
  }
  const onEdit = (editedStatus) => {
    dispatch(EditStudentStatusThunkCreator(courseId, student.id, { status: editedStatus }));
  };

  return (
    <Card className="border-0 border-bottom rounded-0">
      <Card.Body className="p-2 row">
        <div className="col-4">
          <Card.Text className=" m-0">{student.name}</Card.Text>
          <Card.Text className="text-muted m-0">
            Статус - <span className={statusColor}>{studentStatus}</span>
          </Card.Text>
          <Card.Text className="text-muted">{student.email}</Card.Text>
        </div>
        {email === student.email && !isAdmin ? (
          <MarksForStudents midtermResult={student.midtermResult} finalResult={student.finalResult} marks={marks} />
        ) : null}
        {(isTeacher || isAdmin) && isAccepted ? (
          <MarksForTeacherAdmin
            midtermResult={student.midtermResult}
            finalResult={student.finalResult}
            marks={marks}
            student={student}
          />
        ) : null}

        <div className="col d-flex justify-content-end">
          <div className={`${isInQueue ? '' : 'd-none'} `}>
            <Button
              type="button"
              variant="primary"
              className="m-2"
              onClick={() => {
                onEdit('Accepted');
              }}
            >
              Принять
            </Button>
            <Button
              type="button"
              variant="danger"
              className="m-2"
              onClick={() => {
                onEdit('Declined');
              }}
            >
              Отклонить
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Student;
