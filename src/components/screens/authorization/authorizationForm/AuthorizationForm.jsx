import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Email from './Email';
import Password from './Password';
import { LoginThunkCreator } from '../../../../reducers/account-reducer';

function AuthorizationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    dispatch(LoginThunkCreator(data));

    navigate(fromPage);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Email register={register} errors={errors} />
        <Password register={register} errors={errors} />
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  );
}
export default AuthorizationForm;
