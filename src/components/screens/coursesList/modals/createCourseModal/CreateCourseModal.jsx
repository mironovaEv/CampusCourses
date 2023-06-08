import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CourseName from './CourseName';
import CourseYear from './CourseYear';
import CourseMaxStudentsCount from './CourseMaxStudentsCount';
import CourseSemester from './CourseSemester';
import CourseRequirements from './CourseRequirements';
import CourseTeacher from './CourseTeacher';
import CourseAnnotations from './CourseAnnotations';
import { CreateCourseThunkCreator } from '../../../../../reducers/coursesList-reducer';

const CreateCourseModal = ({ show, onHide, users }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
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
    dispatch(CreateCourseThunkCreator(id, data));
    reset();
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Создание курса</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 py-0">
        <Form>
          <CourseName register={register} errors={errors} />
          <CourseYear register={register} errors={errors} />
          <CourseMaxStudentsCount register={register} errors={errors} />
          <CourseSemester register={register} errors={errors} />
          <CourseRequirements register={register} errors={errors} watch={watch} setValue={setValue} />
          <CourseAnnotations register={register} errors={errors} watch={watch} setValue={setValue} />
          <CourseTeacher register={register} errors={errors} users={users} />
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
export default CreateCourseModal;
