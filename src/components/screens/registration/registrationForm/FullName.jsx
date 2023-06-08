import Form from 'react-bootstrap/Form';

const FullName = ({ register, errors }) => (
  <Form.Group className="mb-0 mt-0" controlId="formFIO">
    <Form.Label>ФИО</Form.Label>
    <Form.Control
      type="text"
      placeholder=""
      {...register('fullName', {
        required: 'Поле обязательно к заполнению',
      })}
    />
    <div className="mt-1 text-danger">
      {errors?.fullName && <p className="mb-0">{errors?.fullName?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default FullName;
