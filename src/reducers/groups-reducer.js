import { groupsApi } from '../api/groupsApi';
import { LogoutThunkCreator } from './account-reducer';

const LOAD_GROUPS_LIST = 'LOAD_GROUPS_LIST';

const initialState = {
  groups: [],
};

const groupsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_GROUPS_LIST:
      newState.groups = action.groups;
      return newState;

    default:
      return newState;
  }
};

export function LoadGroupsActionCreator(groups) {
  return { type: LOAD_GROUPS_LIST, groups };
}

export function LoadGroupsThunkCreator() {
  return (dispatch) => {
    groupsApi.GetGroupsList().then((response) => {
      if (response) {
        dispatch(LoadGroupsActionCreator(response));
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function CreateGroupThunkCreator(data) {
  return (dispatch) => {
    groupsApi.CreateGroup(data).then((response) => {
      if (response) {
        dispatch(LoadGroupsThunkCreator());
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function EditGroupNameThunkCreator(data) {
  return (dispatch) => {
    groupsApi.EditGroupName(data).then((response) => {
      if (response) {
        dispatch(LoadGroupsThunkCreator());
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export function DeleteGroupThunkCreator(id) {
  return (dispatch) => {
    groupsApi.DeleteGroup(id).then((response) => {
      if (response) {
        dispatch(LoadGroupsThunkCreator());
      }
      if (response === 401) {
        dispatch(LogoutThunkCreator());
      }
    });
  };
}

export default groupsReducer;
