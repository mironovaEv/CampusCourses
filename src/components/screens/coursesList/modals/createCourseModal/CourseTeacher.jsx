import Form from 'react-bootstrap/Form';

const CourseTeacher = ({ users, register }) => (
  <Form.Group className="mb-3 mt-3" controlId="formCourseTeacher">
    <Form.Label>Основной преподаватель курса</Form.Label>
    <Form.Select {...register('mainTeacherId')}>
      {users.map((value) => (
        <option value={value.id} key={value.id}>
          {value.fullName}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

export default CourseTeacher;
