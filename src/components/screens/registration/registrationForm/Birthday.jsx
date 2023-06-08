import Form from 'react-bootstrap/Form';

const Birthday = ({ register, errors }) => (
  <Form.Group className="mb-0 mt-3" controlId="formBirthday">
    <Form.Label>Дата рождения</Form.Label>
    <Form.Control
      type="date"
      placeholder=""
      {...register('birthDate', {
        required: 'Поле обязательно к заполнению',
        validate: (fieldValue) => {
          const date = new Date().toISOString();
          if (fieldValue > date) {
            return 'Дата рождения не может быть больше текущей даты';
          }
          return true;
        },
      })}
    />
    <div className="mt-1  text-danger">
      {errors?.birthDate && <p className="mb-0">{errors?.birthDate?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default Birthday;
