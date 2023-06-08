import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/esm/Button';
import { useSelector, useDispatch } from 'react-redux';
import { GetUsersThunkCreator } from '../../../../reducers/coursesList-reducer';
import Teacher from './Teacher';
import Student from './Student';
import AddTeacher from '../modals/AddTeacher';
import { isIStudent, isITeacher } from '../courseData/CourseData';

function CourseMembers({ students, teachers, courseId }) {
  let users = useSelector((state) => state.courses.users);
  const dispatch = useDispatch();
  if (!users) {
    useEffect(() => {
      dispatch(GetUsersThunkCreator());
    }, []);
    users = useSelector((state) => state.courses.users);
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const isAdmin = useSelector((state) => state.account.roles.isAdmin);
  const userEmail = useSelector((state) => state.account.email);
  const isStudent = isIStudent(userEmail, students);
  const isTeacher = isITeacher(userEmail, teachers);
  return (
    <div>
      <Tabs defaultActiveKey="teachers" justify className="pt-4">
        <Tab eventKey="teachers" title="Преподаватели" className="border border-top-0 p-3 mb-4">
          <Button
            type="button"
            className={`${isTeacher || isAdmin ? '' : 'd-none'} mb-3`}
            onClick={() => setShow(true)}
          >
            Добавить преподавателя
          </Button>
          {teachers.map((value) => (
            <Teacher teacher={value} key={value.email} />
          ))}
        </Tab>
        <Tab eventKey="students" title="Студенты" className="border border-top-0 p-3 mb-4">
          {students.map((value) => (
            <Student student={value} isStudent={isStudent} isTeacher={isTeacher} courseId={courseId} key={value.id} />
          ))}
        </Tab>
      </Tabs>
      <AddTeacher show={show} onHide={handleClose} users={users} />
    </div>
  );
}

export default CourseMembers;
