import React, { useState } from 'react'
import { Input, Row, Col, Button, Label, Form, FormGroup, Container, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function CreateNFT() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (

    <Container style={{marginTop:50}}>
      <Form>
      <FormGroup row>
    <Label
      for="exampleFile"
      sm={2}
    >
      File
    </Label>
    <Col sm={10}>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        just only pdf format
      </FormText>
    </Col>
  </FormGroup>
  
  
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="nameNFT">
          Name
        </Label>
        <Input
          id="nameNFT"
          name="Name"
        />
      </FormGroup>
    </Col>
    <Col md={4}>  </Col>
    <Col md={2}>
      {/* <FormGroup>
        <Label for="priceNFT">
          Price
        </Label>
        <Input
          id="priceNFT"
          name="Price"
          type="number"
        />
      </FormGroup> */}
    </Col>
  </Row>
  
  <Button color='warning' onClick={toggle}>
    Create a NFT
  </Button>
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>NFT title</ModalHeader>
    <ModalBody>
      <img
      alt='Sample'
      src='https://picsum.photos/300/200'
      ></img>
      <br></br>
      <br></br>
    </ModalBody>
    <ModalFooter>
    <Button color="success" onClick={toggle}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
    </ModalFooter>
  </Modal>
</Form>
    </Container>
    
  )
}


