import { instance, authInstance } from '../api.config';

export function GetProfile(token) {
  return authInstance
    .get('/profile', {
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

function EditProfile(profile) {
  return instance
    .put('/profile', profile)
    .then((response) => {
      if (response.status === 200) {
        return true;
      }
      return false;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        return 401;
      }
      return null;
    });
}

export const profileApi = {
  GetProfile,
  EditProfile,
};
