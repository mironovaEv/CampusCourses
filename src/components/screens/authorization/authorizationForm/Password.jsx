import Form from 'react-bootstrap/Form';

const Password = ({ register, errors }) => (
  <Form.Group className="mb-3" controlId="formPassword">
    <Form.Label>Пароль</Form.Label>
    <Form.Control
      type="password"
      placeholder=""
      {...register('password', {
        required: 'Поле обязательно к заполнению',
      })}
    />
    <div className="mt-1 text-danger">
      {errors?.password && <p className="mb-0">{errors?.password?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default Password;
