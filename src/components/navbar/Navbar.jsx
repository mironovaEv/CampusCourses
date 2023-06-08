import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LogoutThunkCreator } from '../../reducers/account-reducer';

function NavBar(props) {
  const isAuth = !!localStorage.getItem('token');
  const isStudent = useSelector((state) => state.account.roles.isStudent);
  const isTeacher = useSelector((state) => state.account.roles.isTeacher);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerClick = () => {
    const succes = dispatch(LogoutThunkCreator());
    if (succes) {
      navigate('/');
    }
  };

  return (
    <div>
      <Navbar bg="secondary" className="px-3" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Кампусные курсы
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav>
            <Nav.Link as={Link} to="/groups" className={`${isAuth ? '' : 'd-none'}`}>
              Группы курсов
            </Nav.Link>
            <Nav.Link as={Link} to="/courses/my" className={`${isAuth && isStudent ? '' : 'd-none'}`}>
              Мои курсы
            </Nav.Link>
            <Nav.Link as={Link} to="/courses/teaching" className={`${isAuth && isTeacher ? '' : 'd-none'}`}>
              Преподаваемые курсы
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text
              as={Link}
              to="/profile"
              className={`text-light pe-2 text-decoration-none ${isAuth ? '' : 'd-none'}`}
            >
              {props.profile.email}
            </Navbar.Text>
            <Nav.Link as={Link} to="/registration" className={`${isAuth ? 'd-none' : ''}`}>
              Регистрация
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className={`${isAuth ? 'd-none' : ''}`}>
              Вход
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={handlerClick} className={`${isAuth ? '' : 'd-none'}`}>
              Выход
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
