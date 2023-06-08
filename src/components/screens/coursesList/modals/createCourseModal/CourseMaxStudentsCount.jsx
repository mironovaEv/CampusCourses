import Form from 'react-bootstrap/Form';

const CourseMaxStudentsCount = ({ register, errors }) => (
  <Form.Group className="mb-3 mt-3" controlId="formCourseName">
    <Form.Label>Общее количество мест</Form.Label>
    <Form.Control
      type="number"
      placeholder=""
      {...register('maximumStudentsCount', {
        required: 'Поле обязательно к заполнению',
        min: {
          value: 1,
          message: 'Минимальное количество студентов - 1',
        },
        max: {
          value: 200,
          message: 'Максимальное количество студентов - 200',
        },
      })}
    />
    <div className="mt-1 text-danger">
      {errors?.maximumStudentsCount && <p className="mb-0">{errors?.maximumStudentsCount?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default CourseMaxStudentsCount;
