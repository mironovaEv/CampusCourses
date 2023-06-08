import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddNotificationThunkCreator } from '../../../../reducers/courseDetail-reducer';

const CreateNotification = ({ show, onHide }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    dispatch(AddNotificationThunkCreator(id, data));
    reset();
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header className="fw-bold" closeButton>
        Создание уведомления
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            as="textarea"
            rows={3}
            {...register('text', {
              required: 'Поле обязательно к заполнению',
            })}
          />
          <div className="mt-1 text-danger">
            {errors?.text && <p className="mb-0">{errors?.text?.message || 'Ошибка!'}</p>}
          </div>
          <Form.Check {...register('isImportant')} className="mt-2" type="checkbox" label="Важное" />
        </Form>
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

export default CreateNotification;
