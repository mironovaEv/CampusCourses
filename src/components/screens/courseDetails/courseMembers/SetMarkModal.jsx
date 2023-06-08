/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EditStudentMarkThunkCreator } from '../../../../reducers/courseDetail-reducer';

function getMarkStatus(mark) {
  let markStatus;
  if (mark === 'Passed') {
    markStatus = '1';
  } else if (mark === 'Failed') {
    markStatus = '2';
  } else {
    markStatus = 0;
  }
  return markStatus;
}
const SetMarkModal = ({ show, onHide, student, markType, mark }) => {
  console.log(markType);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [statusCode, setValue] = useState(getMarkStatus(mark));

  const chengeValue = (e) => {
    setValue(e.target.value);
  };
  const hide = () => {
    onHide();
    setValue(getMarkStatus(mark));
  };

  const onSet = () => {
    let statusString = '';
    switch (statusCode) {
      case 0:
        break;
      case '1':
        statusString = 'Passed';
        break;
      case '2':
        statusString = 'Failed';
        break;
      default:
        break;
    }
    if (statusString !== '') {
      dispatch(EditStudentMarkThunkCreator(id, student.id, { markType, mark: statusString }));
      onHide();
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={hide} size="lg">
      <Modal.Header className="fw-bold" closeButton>
        Изменение отметки для "{markType === 'Midterm' ? 'Промежуточная аттестация' : 'Финальная аттестация'}"
      </Modal.Header>
      <Modal.Body>
        Студент - {student.name}
        <Form className="mt-2">
          <div>
            <Form.Check
              inline
              label="Пройдено"
              name="statusGroup"
              type="radio"
              id="statusOne"
              value="1"
              checked={statusCode === '1'}
              onChange={chengeValue}
            />
            <Form.Check
              inline
              label="Зафейлено"
              name="statusGroup"
              type="radio"
              id="statusTwo"
              value="2"
              checked={statusCode === '2'}
              onChange={chengeValue}
            />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={hide}>
          Отмена
        </Button>
        <Button variant="primary" type="button" onClick={onSet}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SetMarkModal;
