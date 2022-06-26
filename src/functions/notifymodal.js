import React from "react";
import { Modal, Button } from "react-bootstrap";

const Notifymodal = ({ message, body, openstate, closefn }) => {
  return (
    <>
      {/* MODAL */}
      <Modal show={openstate} backdrop="static">
        <Modal.Header>
          <Modal.Title>{message}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              closefn(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Notifymodal;
