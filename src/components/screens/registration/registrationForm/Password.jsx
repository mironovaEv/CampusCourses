import Form from 'react-bootstrap/Form';

const Password = ({ register, errors }) => (
  <Form.Group className="mb-0 mt-3" controlId="formPassword">
    <Form.Label>Пароль</Form.Label>
    <Form.Control
      type="password"
      placeholder=""
      {...register('password', {
        required: 'Поле обязательно к заполнению',
        minLength: {
          value: 6,
          message: 'Пароль должен содержать не менее 6 символов',
        },
        maxLength: {
          value: 32,
          message: 'Пароль должен содержать не более 32 символов',
        },
      })}
    />
    <div className="mt-1 text-danger">
      {errors?.password && <p className="mb-0">{errors?.password?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default Password;
