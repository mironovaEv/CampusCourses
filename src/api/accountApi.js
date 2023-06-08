/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */

import { instance, authInstance } from '../api.config';

import { GetProfile } from './profileApi';

function Roles(token) {
  return authInstance
    .get('/roles', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      return null;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        return 401;
      }
      return null;
    });
}

function Login(data) {
  return instance
    .post('/login', data)
    .then(async (response) => {
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        return { token };
      }
      console.log(response);
      return null;
    })
    .catch((error) => {
      console.log(error);
    });
}

function Logout() {
  return instance
    .post('/logout')
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('token');
        return true;
      }
      return null;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        return 401;
      }
      return null;
    });
}
function Register(data) {
  return instance
    .post('/registration', data)
    .then((response) => {
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        return { token };
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

async function LoadInfo() {
  const token = localStorage.getItem('token');
  const roles = await Roles(token);
  const profile = await GetProfile(token);
  return { token, roles, profile };
}

export const accountApi = {
  Login,
  Logout,
  Roles,
  Register,
  LoadInfo,
};
