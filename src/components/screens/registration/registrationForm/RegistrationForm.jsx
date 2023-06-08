import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FullName from './FullName';
import Birthday from './Birthday';
import Email from './Email';
import Password from './Password';
import ConfirmPassword from './ConfirmPassword';
import { RegisterThunkCreator } from '../../../../reducers/account-reducer';

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    dispatch(RegisterThunkCreator(data));
    navigate('/');
    reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FullName register={register} errors={errors} />
        <Birthday register={register} errors={errors} />
        <Email register={register} errors={errors} />
        <Password register={register} errors={errors} />
        <ConfirmPassword register={register} errors={errors} getValues={getValues} />
        <Button variant="primary" type="submit" className="mb-3">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}
export default RegistrationForm;
