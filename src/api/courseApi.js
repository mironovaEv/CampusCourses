import { instance } from '../api.config';

function GetCourseDetail(id) {
  return instance
    .get(`/courses/${id}/details`)
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

function EditCourseStatus(id, status) {
  return instance
    .post(`/courses/${id}/status`, status)
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
function EditCourse(id, data) {
  return instance
    .put(`/courses/${id}`, data)
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
function AddNotification(id, data) {
  return instance
    .post(`/courses/${id}/notifications`, data)
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

function AddTeacher(courseId, teacherId) {
  return instance
    .post(`/courses/${courseId}/teachers`, teacherId)
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

function DeleteCourse(id) {
  return instance
    .delete(`/courses/${id}`)
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

function SignUpCourse(courseId) {
  return instance
    .post(`/courses/${courseId}/sign-up`)
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

function EditStudentStatus(courseId, studentId, status) {
  return instance
    .post(`/courses/${courseId}/student-status/${studentId}`, status)
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

function SetMark(courseId, studentId, mark) {
  return instance
    .post(`/courses/${courseId}/marks/${studentId}`, mark)
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

export const courseApi = {
  GetCourseDetail,
  EditCourseStatus,
  EditCourse,
  AddNotification,
  AddTeacher,
  DeleteCourse,
  SignUpCourse,
  EditStudentStatus,
  SetMark,
};
