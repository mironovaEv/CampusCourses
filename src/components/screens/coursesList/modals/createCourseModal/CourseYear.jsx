import Form from 'react-bootstrap/Form';

const CourseYear = ({ register, errors }) => (
  <Form.Group className="mb-3 mt-3" controlId="formCourseYear">
    <Form.Label>Год начала курса</Form.Label>
    <Form.Control
      type="number"
      placeholder=""
      {...register('startYear', {
        required: 'Поле обязательно к заполнению',
        min: {
          value: 2000,
          message: 'Год начала курса не может быть меньше 2000',
        },
        max: {
          value: 2029,
          message: 'Год начала курса не может быть больше 2029',
        },
      })}
    />
    <div className="mt-1 text-danger">
      {errors?.startYear && <p className="mb-0">{errors?.startYear?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default CourseYear;
