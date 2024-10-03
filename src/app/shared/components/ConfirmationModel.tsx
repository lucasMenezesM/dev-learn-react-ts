import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface IConfirmationModal {
  title: string;
  body: string;
  show: boolean;
  navigateLink: string;
  setShow: (value: boolean) => void;
}

export const ConfirmationModel: React.FC<IConfirmationModal> = ({
  show,
  setShow,
  title,
  body,
  navigateLink,
}) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate(navigateLink);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
