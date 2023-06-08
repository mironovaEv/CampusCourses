import { instance } from '../api.config';

function GetGroupCourses(id) {
  return instance
    .get(`/groups/${id}`)
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

function GetMyCourses() {
  return instance
    .get('/courses/my')
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

function GetTeachingCourses() {
  return instance
    .get('/courses/teaching')
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
function CreateCourse(id, data) {
  return instance
    .post(`/courses/${id}/`, data)
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

function GetUsers() {
  return instance
    .get('/users')
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

export const coursesListApi = {
  GetGroupCourses,
  GetMyCourses,
  GetTeachingCourses,
  CreateCourse,
  GetUsers,
};
