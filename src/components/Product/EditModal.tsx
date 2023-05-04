import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import {Product} from '../../redux/reducer/product';
import ProductForm from './ProductForm';

interface EditModalProps {
  showModal: boolean;
  dataToEdit: Product | undefined;
  toggleModal: () => void;
}

const EditModal: FC<EditModalProps> = ({
  toggleModal,
  dataToEdit,
  showModal,
}) => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{dataToEdit ? "Update Product" : "Add Product"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductForm
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
