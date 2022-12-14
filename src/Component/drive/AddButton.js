import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Form, Button } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import { database } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";
import { v4 as uuidV4 } from "uuid";

function AddButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { currentUser } = useAuth();

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  function handleSubmit(e) {
    e.preventDefault();

    // to create folder in the database in firebase
    database.folders.add({
      name: name,
      //parentId,
      userId: currentUser.uid,
      // path,
      // createAt: database.getCurrentTimestamp(),
    });

    setName("");
    closeModal();
  }
  return (
    <>
      <button variant="primary" onClick={openModal}>
        <FontAwesomeIcon icon={faFolderPlus} className="plusfolder" />
      </button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddButton;
