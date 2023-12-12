import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embededLink: ""
  });
  const embededVideoLink = (e)=>{
    const {value} = e.target;
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    console.log("Link for embedding video");
    console.log(link);
    setVideo({...video,embededLink:link})
  }
  const handleUpload = async () => {
    const { id, caption, url, embededLink } = video;
    if (!id || !caption || !caption || !embededLink) {
      alert("Please fill the form completely")
    }
    else {
      const response = await uploadAllVideo(video);
      console.log(response);
      if (response.status == 201) {
        alert(`${response.data.caption} is successfully uploaded`)
        handleClose();
      }
    }
  }
  return (
    <>
      <div className='d-flex align-item-center'>
        <h5>Upload New Video</h5>
        <i class="fa-solid fa-cloud-arrow-up ms-3 mt-2" style={{ color: "white" }} onClick={handleShow}></i>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "23px" }}>
            <i class="fa-solid fa-film text-warning me-3"></i>
            Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border border-secondary p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Id" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image Url" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={(e) => embededVideoLink(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className='btn btn-warning' onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add