/* eslint-disable object-curly-newline */
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AddTeacherThunkCreator } from '../../../../reducers/courseDetail-reducer';

const AddTeacher = ({ show, onHide, users }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { register, reset, handleSubmit } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    dispatch(AddTeacherThunkCreator(id, data));
    reset();
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header className="fw-bold" closeButton>
        Добавление преподавателя на курс
      </Modal.Header>
      <Modal.Body>
        <Form.Select {...register('userId')}>
          {users.map((value) => (
            <option value={value.id} key={value.id}>
              {value.fullName}
            </option>
          ))}
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={onHide}>
          Отмена
        </Button>
        <Button variant="primary" type="button" onClick={handleSubmit(onSubmit)}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTeacher;
