import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React, { useState } from "react";

const FormEvent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      {/* <Button
        className="btn btn-rounded btn-outline-primary ml-md-1"
        onClick={handleShow}
      >
        Créer un évènement
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title mr="5">Créer un évènement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Titre</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Ton évènement en une phrase</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Categories</Form.Label>
                <Form.Control required as="select">
                  <option></option>
                  <option></option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Group md="4" controlId="validationCustomUsername">
              <Form.Label>Description</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" rows={3} required />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label>Addresse</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom04">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom05">
                <Form.Label>Code postal</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Photo" />
            </Form.Group>
            <Button className="float-right ml-2" type="submit">
              Ajouter
            </Button>
            <Button
              className="float-right"
              variant="secondary"
              onClick={handleClose}
            >
              Fermer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormEvent;
