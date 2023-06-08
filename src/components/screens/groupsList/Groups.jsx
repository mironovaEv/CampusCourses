import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import AdminGroupItem from './AdminGroupItem';
import UserGroupItem from './UserGroupItem';
import CreateEditGroupModal from './modals/CreateEditGroupModal';

const CREATE = 'CREATE';

const Groups = ({ groups }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const isAdmin = useSelector((state) => state.account.roles.isAdmin);

  return (
    <div>
      <Container>
        <h1 className="pt-3">Группы кампусных курсов</h1>
        <Button
          className={`${isAdmin ? '' : 'd-none'} mt-3 `}
          variant="primary"
          type="button"
          onClick={() => setShow(true)}
        >
          Создать
        </Button>
        <div className="mb-4 mt-4">
          {groups.map((value) => {
            if (isAdmin) {
              return <AdminGroupItem id={value.id} groupName={value.name} key={value.id} />;
            }
            return <UserGroupItem id={value.id} groupName={value.name} key={value.id} />;
          })}
        </div>
      </Container>
      <CreateEditGroupModal show={show} onHide={handleClose} action={CREATE} />
    </div>
  );
};
export default Groups;
