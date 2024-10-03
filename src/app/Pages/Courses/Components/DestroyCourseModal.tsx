import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { ConfirmationModel } from "../../../shared/components/ConfirmationModel";
import { useNavigate } from "react-router-dom";

interface ICourseModal {
  show: boolean;
  setShow: (value: boolean) => void;
  onDestroyCourse: () => void;
}

export const DestroyCourseModal: React.FC<ICourseModal> = ({ show, setShow, onDestroyCourse }) => {
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const [showDeleteConfimation, setShowDeleteConfirmation] = useState(false);

  const handleConfirm = (): void => {
    handleClose();
    onDestroyCourse();
    setShowDeleteConfirmation(true);
  };

  return (
    <>
      <ConfirmationModel
        show={showDeleteConfimation}
        setShow={setShowDeleteConfirmation}
        title="Curso Apagado"
        body="Esse Curso não se encontra mais na lista de cursos cadastrados no sistema"
        navigateLink="/"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tem certeza que deseja excluir esse curso?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Essa ação não pode ser desfeita após isso.</Modal.Body>
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
