import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { ConfirmationModel } from "./ConfirmationModel";
import { useNavigate } from "react-router-dom";

interface ICourseModal {
  title: string;
  body: string;
  show: boolean;
  confirmationTitle:string;
  confirmationBody:string;
  navegateLink: string;
  setShow: (value: boolean) => void;
  onDelete: () => void;
}

export const DeleteModal: React.FC<ICourseModal> = ({ 
  show, 
  setShow, 
  onDelete, 
  title, 
  body, 
  confirmationBody, 
  confirmationTitle,
  navegateLink
 }) => {
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const [showDeleteConfimation, setShowDeleteConfirmation] = useState(false);

  const handleConfirm = (): void => {
    handleClose();
    onDelete(); // METHOD PASSED THROUGH PARENT TO DELETE ITEM
    setShowDeleteConfirmation(true);
  };

  return (
    <>
      <ConfirmationModel
        show={showDeleteConfimation}
        setShow={setShowDeleteConfirmation}
        title={confirmationTitle}
        body={confirmationBody}
        navigateLink={navegateLink}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleConfirm}>
            Sim
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
