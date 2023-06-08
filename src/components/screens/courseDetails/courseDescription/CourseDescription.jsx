/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/esm/Button';
import Tabs from 'react-bootstrap/Tabs';

import Notifications from './Notifications';
import CreateNotification from '../modals/CreateNotification';
import { isITeacher } from '../courseData/CourseData';

function CourseDescription({ requirements, annotations, notifications, teachers }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const isAdmin = useSelector((state) => state.account.roles.isAdmin);
  const userEmail = useSelector((state) => state.account.email);
  const isTeacher = isITeacher(userEmail, teachers);

  const title = () => {
    let count = '';
    if (notifications?.length > 3) {
      count = '3+';
    } else {
      count = notifications?.length;
    }
    return (
      <div>
        <span>Уведомления</span>
        <span className="text-wrap bg-danger badge ms-2">{count}</span>
      </div>
    );
  };
  return (
    <div>
      <Tabs defaultActiveKey="requirements" className="pt-4" justify>
        <Tab
          eventKey="requirements"
          title="Требования к курсу"
          className="border border-top-0 p-3 "
          dangerouslySetInnerHTML={{ __html: requirements }}
        />
        <Tab
          eventKey="annotation"
          title="Аннотация"
          className="border border-top-0 p-3"
          dangerouslySetInnerHTML={{ __html: annotations }}
        />
        <Tab eventKey="notifications" title={title()} className="border border-top-0 p-3">
          <Button
            className={`${isTeacher || isAdmin ? '' : 'd-none'} mb-3`}
            type="button"
            onClick={() => setShow(true)}
          >
            Создать уведомление
          </Button>
          {notifications.map((value) => (
            <Notifications notification={value} />
          ))}
        </Tab>
      </Tabs>
      <CreateNotification show={show} onHide={handleClose} />
    </div>
  );
}

export default CourseDescription;
