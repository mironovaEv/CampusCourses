/* eslint-disable object-curly-newline */
/* eslint-disable eqeqeq */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { EditCourseStatusThunkCreator } from '../../../../reducers/courseDetail-reducer';

const EditCourseStatusModal = ({ id, status, show, onHide }) => {
  const dispatch = useDispatch();
  const [statusCode, setValue] = useState(0);

  const chengeValue = (e) => {
    setValue(e.target.value);
  };
  const hide = () => {
    onHide();
    setValue(status);
  };
  const onSet = () => {
    let statusString = '';
    switch (statusCode) {
      case 0:
        break;
      case '1':
        statusString = 'OpenForAssigning';
        break;
      case '2':
        statusString = 'Started';
        break;
      case '3':
        statusString = 'Finished';
        break;
      default:
        break;
    }
    if (statusString !== '') {
      dispatch(EditCourseStatusThunkCreator(id, { status: statusString }));
      onHide();
      setValue(0);
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={hide} size="lg">
      <Modal.Header className="fw-bold" closeButton>
        Изменение статуса курса
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form.Check
            className={status < 1 ? '' : 'd-none'}
            inline
            label="Открыт для записи"
            name="statusGroup"
            type="radio"
            id="statusOne"
            value="1"
            checked={statusCode == '1'}
            onChange={chengeValue}
          />
          <Form.Check
            className={status < 2 ? '' : 'd-none'}
            inline
            label="В процессе"
            name="statusGroup"
            type="radio"
            id="statusTwo"
            value="2"
            checked={statusCode == '2'}
            onChange={chengeValue}
          />
          <Form.Check
            className={status < 3 ? '' : 'd-none'}
            inline
            label="Завершен"
            name="statusGroup"
            type="radio"
            id="statusThree"
            value="3"
            checked={statusCode == '3'}
            onChange={chengeValue}
          />
        </div>
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

export default EditCourseStatusModal;
