import Form from 'react-bootstrap/Form';

const Birthday = ({ day, register, errors }) => (
  <Form.Group className="mb-3 mt-3 d-flex row" controlId="formBirthday">
    <div className="col-sm-2 col-12 d-flex ">
      <Form.Label className="m-0 mt-1 mb-2 mb-sm-0">Дата рождения</Form.Label>
    </div>
    <div className="col-sm-10 col-12">
      <Form.Control
        defaultValue={String(day)}
        className=""
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
    </div>
  </Form.Group>
);

export default Birthday;
