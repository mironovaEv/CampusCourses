import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EditCourseThunkCreator } from '../../../../../reducers/courseDetail-reducer';
import CourseRequirements from '../../../coursesList/modals/createCourseModal/CourseRequirements';
import CourseAnnotations from '../../../coursesList/modals/createCourseModal/CourseAnnotations';

const EditCourseModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    setValue,
    reset,
    watch,
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    dispatch(EditCourseThunkCreator(id, data));
    reset();
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Редактирование курса</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 py-0">
        <Form>
          <CourseRequirements register={register} errors={errors} watch={watch} setValue={setValue} />
          <CourseAnnotations register={register} errors={errors} watch={watch} setValue={setValue} />
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
export default EditCourseModal;
