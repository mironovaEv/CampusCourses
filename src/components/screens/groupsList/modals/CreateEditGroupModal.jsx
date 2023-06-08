/* eslint-disable object-curly-newline */

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { CreateGroupThunkCreator, EditGroupNameThunkCreator } from '../../../../reducers/groups-reducer';

const CREATE = 'CREATE';
const EDIT = 'EDIT';

const CreateEditGroupModal = ({ show, onHide, action, groupName, groupId }) => {
  let title = '';
  switch (action) {
    case CREATE:
      title = 'Создание группы';
      break;
    case EDIT:
      title = 'Редактирование группы';
      break;
    default:
      title = '';
      break;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    switch (action) {
      case CREATE:
        dispatch(CreateGroupThunkCreator(data));
        break;
      case EDIT:
        dispatch(EditGroupNameThunkCreator({ id: groupId, name: data }));
        break;
      default:
        break;
    }
    reset();
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 py-0">
        <Form>
          <Form.Group className="mb-3 mt-3" controlId="formGroupName">
            <Form.Label>Название группы</Form.Label>
            <Form.Control
              {...register('name', {
                required: 'Поле обязательно к заполнению',
              })}
              type="text"
              placeholder=""
              defaultValue={groupName}
            />
            <div className="mt-1 text-danger">
              {errors?.name && <p className="mb-0">{errors?.name?.message || 'Ошибка!'}</p>}
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={onHide}>
          Отмена
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateEditGroupModal;
