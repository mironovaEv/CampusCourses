import Form from 'react-bootstrap/Form';

const FullName = ({ name, register, errors }) => (
  <Form.Group className="mb-3 mt-3 d-flex row" controlId="formFIO">
    <div className="col-sm-2 col-12 d-flex align-items-center">
      <Form.Label className="m-0 mb-2 mb-sm-0">ФИО</Form.Label>
    </div>
    <div className="col-sm-10 col-12">
      <Form.Control
        defaultValue={name}
        className=""
        type="text"
        placeholder=""
        {...register('fullName', {
          required: 'Поле обязательно к заполнению',
        })}
      />
      <div className="col-sm-10 col-12 mt-1 text-danger">
        {errors?.fullName && <p className="mb-0">{errors?.fullName?.message || 'Ошибка!'}</p>}
      </div>
    </div>
  </Form.Group>
);

export default FullName;
