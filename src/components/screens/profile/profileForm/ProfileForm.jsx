import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import FullName from './FullName';
import Birthday from './Birthday';
import { EditProfileThunkCreator } from '../../../../reducers/profile-reducer';

function ProfileForm(props) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });
  const onSubmit = (data) => {
    dispatch(EditProfileThunkCreator(data, token));
    reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FullName name={props.fullName} register={register} errors={errors} />
        <Form.Group className="mb-3 mt-3 d-flex row" controlId="formEmail">
          <div className="col-sm-2 col-12 d-flex align-items-center">
            <Form.Label className="m-0">Email</Form.Label>
          </div>
          <div className="col-sm-10 col-12">
            <Form.Text className="text-dark">{props.email}</Form.Text>
          </div>
        </Form.Group>
        <Birthday day={props.birthDate} register={register} errors={errors} />
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Изменить
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProfileForm;
