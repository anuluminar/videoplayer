import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category, setCategory] = useState({
    id: "",
    categoryName: ""
  })
  const uploadCategory = () => {
    alert(JSON.stringify(category))
  }
  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}> Add New Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning me-3"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border border-secondary p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter category Id" onChange={(e) => setCategory({ ...category, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter category name" onChange={(e) => setCategory({ ...category, categoryName: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={uploadCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category