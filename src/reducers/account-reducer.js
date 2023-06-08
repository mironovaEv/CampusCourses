/* eslint-disable object-curly-newline */

import { accountApi } from '../api/accountApi';

const LOGIN = 'LOGIN';
const REGISTRATION = 'REGISTRATION';
const LOGOUT = 'LOGOUT';
const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

const initialState = {
  token: '',
  isAuth: false,
  roles: {
    isAdmin: false,
    isStudent: false,
    isTeacher: false,
  },
  email: '',
  fullNmae: '',
  birthDay: '',
};

// eslint-disable-next-line default-param-last
const accountReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOGIN:
    case REGISTRATION:
      newState.token = action.token;
      newState.isAuth = true;
      newState.roles.isAdmin = action.roles.isAdmin;
      newState.roles.isStudent = action.roles.isStudent;
      newState.roles.isTeacher = action.roles.isTeacher;
      newState.email = action.profile.email;
      newState.fullNmae = action.profile.fullNmae;
      newState.birthDay = action.profile.birthDay;

      return newState;

    case LOGOUT:
      newState.token = '';
      newState.isAuth = false;
      newState.roles.isAdmin = false;
      newState.roles.isStudent = false;
      newState.roles.isTeacher = false;
      newState.email = '';
      newState.fullNmae = '';
      newState.birthDay = '';
      return newState;
    case SET_FETCH_ERROR:
      return {
        ...newState,
        isFetchError: action.isFetchError,
      };
    default:
      return newState;
  }
};

export function LogoutActionCreator() {
  return { type: LOGOUT };
}

export function LoginActionCreator(token, roles, profile) {
  return { type: LOGIN, token, roles, profile };
}

export function SetFetchError(bool) {
  return { type: SET_FETCH_ERROR, bool };
}
export function LogoutThunkCreator() {
  return (dispatch) => {
    accountApi.Logout().then((resp) => {
      if (resp) {
        dispatch(LogoutActionCreator());
      }
    });
  };
}
export function LoadInfoThunkCreator() {
  return (dispatch) => {
    accountApi.LoadInfo().then((resp) => {
      if (resp) {
        dispatch(LoginActionCreator(resp.token, resp.roles, resp.profile));
      }
    });
  };
}

export function LoginThunkCreator(email, password) {
  return (dispatch) => {
    accountApi.Login(email, password).then((resp) => {
      if (resp) {
        dispatch(LoadInfoThunkCreator());
      }
    });
  };
}

export function RegisterThunkCreator(data) {
  return (dispatch) => {
    accountApi.Register(data).then((resp) => {
      if (resp) {
        dispatch(LoadInfoThunkCreator());
      }
    });
  };
}
export default accountReducer;
