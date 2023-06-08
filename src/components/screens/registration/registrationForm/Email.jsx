import Form from 'react-bootstrap/Form';

const Email = ({ register, errors }) => (
  <Form.Group className="mb-0 mt-3" controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control
      type="email"
      placeholder=""
      {...register('email', {
        required: 'Поле обязательно к заполнению',
        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{1,4}$/i, message: 'Введен некорректный email' },
      })}
    />
    <Form.Text className="text-muted">Email будет использоваться для входа в систему</Form.Text>
    <div className="mt-1 text-danger">
      {errors?.email && <p className="mb-0">{errors?.email?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default Email;
