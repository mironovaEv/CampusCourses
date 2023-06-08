import Form from 'react-bootstrap/Form';

const CourseName = ({ register, errors }) => (
  <Form.Group className="mb-3 mt-3" controlId="formCourseName">
    <Form.Label>Название курса</Form.Label>
    <Form.Control
      type="text"
      placeholder=""
      {...register('name', {
        required: 'Поле обязательно к заполнению',
      })}
    />
    <div className="mt-1 text-danger">
      {errors?.name && <p className="mb-0">{errors?.name?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default CourseName;
