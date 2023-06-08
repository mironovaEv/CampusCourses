import Form from 'react-bootstrap/Form';

const ConfirmPassword = ({ register, errors, getValues }) => (
  <Form.Group className="mb-3 mt-3" controlId="formRepeatPassword">
    <Form.Label>Повторите пароль</Form.Label>
    <Form.Control
      type="password"
      placeholder=""
      {...register('confirmPassword', {
        required: 'Поле обязательно к заполнению',
        validate: (fieldValue) => {
          if (fieldValue !== getValues('password')) {
            return 'Пароли не совпадают';
          }
          return true;
        },
      })}
    />
    <div className="mt-1 text-danger">
      {errors?.confirmPassword && <p className="mb-0">{errors?.confirmPassword?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default ConfirmPassword;
