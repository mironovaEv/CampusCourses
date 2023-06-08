import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { LoadCourseDetailThunkCreator } from '../../../reducers/courseDetail-reducer';
import CourseDetails from './CourseDetails';

function MiddleCourseDetailsComponent(props) {
  const { id } = useParams();
  useEffect(() => {
    props.LoadCourseDetailThunkCreator(id);
  }, []);
  return <CourseDetails {...props} />;
}

function MapStateToProps(state) {
  return { courseDetails: state.courseDetails };
}
const CourseDetailsContainer = connect(MapStateToProps, { LoadCourseDetailThunkCreator })(MiddleCourseDetailsComponent);

export default CourseDetailsContainer;
