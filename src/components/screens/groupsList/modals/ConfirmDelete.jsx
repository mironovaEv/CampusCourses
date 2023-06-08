/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmDelete = ({ show, onHide, name, onConfirm, type }) => (
  <Modal show={show} onHide={onHide} size="lg">
    <Modal.Body className="h5 ">
      Вы действительно хотите удалить {type} <span className="text-primary">{name}</span>?
    </Modal.Body>
    <Modal.Footer className="p-1">
      <Button variant="secondary" onClick={onHide}>
        Отмена
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          onConfirm();
          onHide();
        }}
      >
        Удалить
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ConfirmDelete;
