import { coursesListApi } from '../api/coursesListApi';
import { LogoutThunkCreator } from './account-reducer';

const LOAD_COURSES_LIST = 'LOAD_COURSES_LIST';
const LOAD_MY_COURSES = 'LOAD_MY_COURSES';
const LOAD_TEACHING_COURSES = 'LOAD_TEACHING_COURSES';
const GET_USERS = 'GET_USERS';

const initialState = {
  courses: [],
  myCourses: [],
  teachingCourses: [],
  users: [],
};

const coursesListReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_COURSES_LIST:
      newState.courses = action.courses;
      return newState;
    case LOAD_MY_COURSES:
      newState.myCourses = action.courses;
      return newState;
    case LOAD_TEACHING_COURSES:
      newState.teachingCourses = action.courses;
      return newState;
    case GET_USERS:
      newState.users = action.users;
      return newState;
    default:
      return newState;
  }
};

export function LoadCoursesActionCreator(courses) {
  return { type: LOAD_COURSES_LIST, courses };
}

export function LoadMyCoursesActionCreator(courses) {
  return { type: LOAD_MY_COURSES, courses };
}

export function LoadTeachingCoursesActionCreator(courses) {
  return { type: LOAD_TEACHING_COURSES, courses };
}

export function GetUsersActionCreator(users) {
  return { type: GET_USERS, users };
}

export function LoadCoursesThunkCreator(id) {
  return (dispatch) => {
    coursesListApi.GetGroupCourses(id).then((response) => {
      if (response) {
        dispatch(LoadCoursesActionCreator(response));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function LoadMyCoursesThunkCreator() {
  return (dispatch) => {
    coursesListApi.GetMyCourses().then((response) => {
      if (response) {
        dispatch(LoadMyCoursesActionCreator(response));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function LoadTeachingCoursesThunkCreator() {
  return (dispatch) => {
    coursesListApi.GetTeachingCourses().then((response) => {
      if (response) {
        dispatch(LoadTeachingCoursesActionCreator(response));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function CreateCourseThunkCreator(id, data) {
  return (dispatch) => {
    coursesListApi.CreateCourse(id, data).then((response) => {
      if (response) {
        dispatch(LoadCoursesThunkCreator(id));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function GetUsersThunkCreator() {
  return (dispatch) => {
    coursesListApi.GetUsers().then((response) => {
      if (response) {
        dispatch(GetUsersActionCreator(response));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export default coursesListReducer;
