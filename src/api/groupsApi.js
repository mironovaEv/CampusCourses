import { instance } from '../api.config';

function GetGroupsList() {
  return instance
    .get('/groups')
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

function CreateGroup(data) {
  return instance
    .post('/groups', data)
    .then((response) => {
      if (response.status === 200) {
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

function EditGroupName(data) {
  return instance
    .put(`/groups/${data.id}`, data.name)
    .then((response) => {
      if (response.status === 200) {
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
function DeleteGroup(id) {
  return instance
    .delete(`/groups/${id}`)
    .then((response) => {
      if (response.status === 200) {
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

export const groupsApi = {
  GetGroupsList,
  CreateGroup,
  EditGroupName,
  DeleteGroup,
};
