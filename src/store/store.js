/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../reducers/account-reducer';
import profileReducer from '../reducers/profile-reducer';
import groupsReducer from '../reducers/groups-reducer';
import coursesListReducer from '../reducers/coursesList-reducer';
import courseDetailReducer from '../reducers/courseDetail-reducer';

export default configureStore({
  reducer: {
    account: accountReducer,
    profile: profileReducer,
    groups: groupsReducer,
    courses: coursesListReducer,
    courseDetails: courseDetailReducer,
  },
});
