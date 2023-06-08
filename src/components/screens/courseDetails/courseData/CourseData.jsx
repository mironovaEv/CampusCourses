/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import CourseStatus from './Status';
import CourseYearSemester from './YearSemester';
import CoursePlacesStudents from './PlacesStudents';
import CourseApplications from './Applications';

import { GetUsersThunkCreator } from '../../../../reducers/coursesList-reducer';
import EditCourseModal from './modals/EditCourseModal';
import ConfirmDelete from '../../groupsList/modals/ConfirmDelete';
import { DeleteCourseThunkCreator } from '../../../../reducers/courseDetail-reducer';

export function isIStudent(userEmail, students) {
  const student = students.find((stud) => stud.email === userEmail);
  return !!student;
}
export function isITeacher(userEmail, teachers) {
  const teacher = teachers.find((teach) => teach.email === userEmail);
  return !!teacher;
}

function CourseData(props) {
  const { id } = useParams();
  const isAdmin = useSelector((state) => state.account.roles.isAdmin);
  const userEmail = useSelector((state) => state.account.email);
  const isTeacher = isITeacher(userEmail, props.teachers);
  const isStudent = isIStudent(userEmail, props.students);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [showDel, setShowDel] = useState(false);
  const handleCloseDel = () => setShowDel(false);
  useEffect(() => {
    dispatch(GetUsersThunkCreator());
  }, []);
  const onConfirm = () => {
    dispatch(DeleteCourseThunkCreator(id));
    navigate('/groups');
  };
  return (
    <div>
      <div className="row pt-3 pb-3">
        <h4 className="col-6 ">Основные данные курса</h4>
        <div className="col-6 d-flex justify-content-end">
          <Button
            className={`${isTeacher || isAdmin ? '' : 'd-none'}`}
            variant="warning"
            type="button"
            onClick={() => setShow(true)}
          >
            РЕДАКТИРОВАТЬ
          </Button>
          <Button
            variant="danger"
            className={`${isTeacher || isAdmin ? '' : 'd-none'} ms-2`}
            type="button"
            onClick={() => setShowDel(true)}
          >
            УДАЛИТЬ
          </Button>
        </div>
      </div>
      <CourseStatus id={props.id} status={props.status} isAdmin={isAdmin} isTeacher={isTeacher} isStudent={isStudent} />
      <CourseYearSemester year={props.year} semester={props.semester} />
      <CoursePlacesStudents places={props.places} students={props.studentsCount} />
      <CourseApplications applications={props.applications} />
      <EditCourseModal show={show} onHide={handleClose} id={props.id} />
      <ConfirmDelete show={showDel} onHide={handleCloseDel} name={props.name} onConfirm={onConfirm} type="курс" />
    </div>
  );
}

export default CourseData;
