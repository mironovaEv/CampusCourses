import Form from 'react-bootstrap/Form';

const CourseSemester = ({ register, errors }) => (
  <Form.Group className="mb-3 mt-3" controlId="formCourseSemester">
    <Form.Label>Семестр</Form.Label>
    <div className="mb-3">
      <Form.Check
        inline
        label="Осенний"
        name="semesterGroup"
        type="radio"
        value="Autumn"
        id="inline-radio-1"
        {...register('semester', { required: 'Выберите семестр' })}
      />
      <Form.Check
        inline
        label="Весенний"
        name="semesterGroup"
        type="radio"
        value="Spring"
        id="inline-radio-2"
        {...register('semester', { required: 'Выберите семестр' })}
      />
    </div>

    <div className="mt-1 text-danger">
      {errors?.semester && <p className="mb-0">{errors?.semester?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default CourseSemester;
