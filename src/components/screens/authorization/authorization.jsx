import Container from 'react-bootstrap/esm/Container';
import AuthorizationForm from './authorizationForm/AuthorizationForm';

function Authorization() {
  return (
    <div>
      <Container>
        <h1 className="pt-3">Авторизация</h1>
        <AuthorizationForm />
      </Container>
    </div>
  );
}
export default Authorization;
