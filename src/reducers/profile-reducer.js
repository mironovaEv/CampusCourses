import { profileApi } from '../api/profileApi';
import { LogoutThunkCreator } from './account-reducer';

const LOAD_PROFILE = 'LOAD_PROFILE';

const initialState = {
  fullName: '',
  email: '',
  birthDate: '',
};

// eslint-disable-next-line default-param-last
const profileReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_PROFILE:
      newState.fullName = action.fullName;
      newState.email = action.email;
      newState.birthDate = action.birthDate;
      return newState;
    default:
      return newState;
  }
};

export function LoadProfileActionCreator(profile) {
  return {
    type: LOAD_PROFILE,
    fullName: profile.fullName,
    email: profile.email,
    birthDate: profile.birthDate.substring(0, 10),
  };
}
export function LoadProfileThunkCreator(token) {
  return (dispatch) => {
    profileApi.GetProfile(token).then((data) => {
      if (data) {
        dispatch(LoadProfileActionCreator(data));
      }
      if (data === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function EditProfileThunkCreator(profile, token) {
  return (dispatch) => {
    profileApi.EditProfile(profile).then((resp) => {
      if (resp) {
        dispatch(LoadProfileThunkCreator(token));
      }
      if (resp === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export default profileReducer;
