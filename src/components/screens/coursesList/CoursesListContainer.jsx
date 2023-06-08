import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadCoursesThunkCreator } from '../../../reducers/coursesList-reducer';
import GroupCoursesList from './GroupCoursesList';

function MiddleCoursesComponent(props) {
  const { id } = useParams();
  useEffect(() => {
    props.LoadCoursesThunkCreator(id);
  }, []);
  return <GroupCoursesList {...props} listType="group" />;
}

function MapStateToProps(state) {
  return { courses: state.courses.courses };
}
const CoursesListContainer = connect(MapStateToProps, { LoadCoursesThunkCreator })(MiddleCoursesComponent);

export default CoursesListContainer;
