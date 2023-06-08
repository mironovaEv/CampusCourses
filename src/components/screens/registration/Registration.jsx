import { Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import RegistrationForm from './registrationForm/RegistrationForm';

function Registration() {
  const isAuth = !!localStorage.getItem('token');

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Container>
        <h1 className="pt-3">Регистрация нового пользователя</h1>
        <RegistrationForm />
      </Container>
    </div>
  );
}
export default Registration;
