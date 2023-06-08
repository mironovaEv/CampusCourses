/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import CoursesItem from './CoursesItem';
import CreateCourseModal from './modals/createCourseModal/CreateCourseModal';
import { GetUsersThunkCreator } from '../../../reducers/coursesList-reducer';
import { LoadGroupsThunkCreator } from '../../../reducers/groups-reducer';

function GroupCoursesList({ courses, listType }) {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.account.roles.isAdmin);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  let title = '';
  let isGroupCourse = false;
  switch (listType) {
    case 'my':
      title = 'Мои курсы';
      break;
    case 'teaching':
      title = 'Преподаваемые курсы';
      break;
    case 'group': {
      const groupId = useParams().id;
      const groupName = useSelector((state) => state.groups.groups).find((group) => group.id === groupId)?.name;
      if (!groupName) {
        dispatch(LoadGroupsThunkCreator());
      }
      title = `Группа - ${groupName}`;
      isGroupCourse = true;
      break;
    }
    default:
      break;
  }
  useEffect(() => {
    dispatch(GetUsersThunkCreator());
  }, []);

  const users = useSelector((state) => state.courses.users);

  return (
    <div>
      <Container>
        <h1 className="pt-3">{title}</h1>
        <Button
          className={`${isAdmin && isGroupCourse ? '' : 'd-none'} mt-3 `}
          variant="primary"
          type="button"
          onClick={() => setShow(true)}
        >
          Создать курс
        </Button>
        <div className="mb-4 mt-4">
          {courses.map((value) => (
            <CoursesItem course={value} key={value.id} />
          ))}
        </div>
      </Container>
      <CreateCourseModal show={show} onHide={handleClose} users={users} />
    </div>
  );
}

export default GroupCoursesList;
