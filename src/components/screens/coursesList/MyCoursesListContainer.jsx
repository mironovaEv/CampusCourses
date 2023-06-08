import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { LoadMyCoursesThunkCreator } from '../../../reducers/coursesList-reducer';
import GroupCoursesList from './GroupCoursesList';

function MiddleMyCoursesComponent(props) {
  useEffect(() => {
    props.LoadMyCoursesThunkCreator();
  }, []);
  return <GroupCoursesList {...props} listType="my" />;
}

function MapStateToProps(state) {
  return { courses: state.courses.myCourses };
}
const MyCoursesListContainer = connect(MapStateToProps, { LoadMyCoursesThunkCreator })(MiddleMyCoursesComponent);

export default MyCoursesListContainer;
