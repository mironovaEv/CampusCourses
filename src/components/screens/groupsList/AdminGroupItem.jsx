import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import styles from './Groups.module.css';
import CreateEditGroupModal from './modals/CreateEditGroupModal';
import ConfirmDelete from './modals/ConfirmDelete';
import { DeleteGroupThunkCreator } from '../../../reducers/groups-reducer';

const EDIT = 'EDIT';

function AdminGroupItem({ groupName, id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);

  const onConfirm = () => {
    dispatch(DeleteGroupThunkCreator(id));
  };
  return (
    <div>
      <Card>
        <Card.Body className="p-2 px-3 d-flex justify-content-between row">
          <div className="d-flex align-items-center  col-12 col-md-6 mb-2 mb-md-0">
            <Card.Link as={Link} to={`/groups/${id}`} className={styles.cardText}>
              {groupName}
            </Card.Link>
          </div>
          <div className="col-12 col-md-6 d-flex  justify-content-md-end">
            <Button
              variant="warning"
              type="button"
              onClick={() => {
                setShow(true);
              }}
            >
              РЕДАКТИРОВАТЬ
            </Button>
            <Button
              className="ms-1"
              variant="danger"
              type="button"
              onClick={() => {
                setShowConfirm(true);
              }}
            >
              УДАЛИТЬ
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ConfirmDelete
        show={showConfirm}
        onHide={handleCloseConfirm}
        name={groupName}
        id={id}
        onConfirm={onConfirm}
        type="группу"
      />
      <CreateEditGroupModal show={show} onHide={handleClose} action={EDIT} groupName={groupName} groupId={id} />
    </div>
  );
}

export default AdminGroupItem;
