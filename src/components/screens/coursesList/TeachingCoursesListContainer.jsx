import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadTeachingCoursesThunkCreator } from '../../../reducers/coursesList-reducer';

import GroupCoursesList from './GroupCoursesList';

function MiddleTeachingCoursesComponent(props) {
  useEffect(() => {
    props.LoadTeachingCoursesThunkCreator();
  }, []);
  return <GroupCoursesList {...props} listType="teaching" />;
}

function MapStateToProps(state) {
  return { courses: state.courses.teachingCourses };
}
const TeachingCoursesListContainer = connect(MapStateToProps, { LoadTeachingCoursesThunkCreator })(
  MiddleTeachingCoursesComponent,
);

export default TeachingCoursesListContainer;
