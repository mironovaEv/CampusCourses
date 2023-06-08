import { Outlet, Navigate } from 'react-router-dom';

function AuthRoute() {
  const auth = !!localStorage.getItem('token');
  return auth ? <Navigate to="/" /> : <Outlet />;
}

export default AuthRoute;
