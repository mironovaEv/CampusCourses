import { courseApi } from '../api/courseApi';
import { LogoutThunkCreator } from './account-reducer';

const LOAD_COURSE_DETAIL = 'LOAD_COURSE_DETAIL';

const initialState = {
  id: '',
  name: '',
  startYear: 0,
  maximumStudentsCount: 0,
  studentsEnrolledCount: 0,
  studentsInQueueCount: 0,
  requirements: '',
  annotations: '',
  status: '',
  semester: '',
  students: [],
  teachers: [],
  notifications: [],
};

const courseDetailReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_COURSE_DETAIL:
      newState.id = action.detail.id;
      newState.name = action.detail.name;
      newState.startYear = action.detail.startYear;
      newState.maximumStudentsCount = action.detail.maximumStudentsCount;
      newState.studentsEnrolledCount = action.detail.studentsEnrolledCount;
      newState.studentsInQueueCount = action.detail.studentsInQueueCount;
      newState.requirements = action.detail.requirements;
      newState.annotations = action.detail.annotations;
      newState.status = action.detail.status;
      newState.semester = action.detail.semester;
      newState.students = action.detail.students;
      newState.teachers = action.detail.teachers;
      newState.notifications = action.detail.notifications;
      return newState;

    default:
      return newState;
  }
};

export function LoadCourseDetailActionCreator(detail) {
  return { type: LOAD_COURSE_DETAIL, detail };
}

export function LoadCourseDetailThunkCreator(id) {
  return (dispatch) => {
    courseApi.GetCourseDetail(id).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailActionCreator(response));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function EditCourseStatusThunkCreator(id, status) {
  return (dispatch) => {
    courseApi.EditCourseStatus(id, status).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailThunkCreator(id));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}
export function EditCourseThunkCreator(id, data) {
  return (dispatch) => {
    courseApi.EditCourse(id, data).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailThunkCreator(id));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function AddNotificationThunkCreator(id, data) {
  return (dispatch) => {
    courseApi.AddNotification(id, data).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailThunkCreator(id));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function AddTeacherThunkCreator(id, teacherId) {
  return (dispatch) => {
    courseApi.AddTeacher(id, teacherId).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailThunkCreator(id));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function DeleteCourseThunkCreator(id) {
  return (dispatch) => {
    courseApi.DeleteCourse(id).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailThunkCreator(id));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}
export function SignUpCourseThunkCreator(id) {
  return (dispatch) => {
    courseApi.SignUpCourse(id).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailThunkCreator(id));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function EditStudentStatusThunkCreator(courseId, studentId, status) {
  return (dispatch) => {
    courseApi.EditStudentStatus(courseId, studentId, status).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailThunkCreator(courseId));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function EditStudentMarkThunkCreator(courseId, studentId, mark) {
  return (dispatch) => {
    courseApi.SetMark(courseId, studentId, mark).then((response) => {
      if (response) {
        dispatch(LoadCourseDetailThunkCreator(courseId));
      }
    });
  };
}

export default courseDetailReducer;
