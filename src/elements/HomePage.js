import React, { useState } from 'react'
import { Table, Container, Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function HomePage() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Container style={{border:'ridge',
        padding:"5px"}}>
      <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      NFT title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      0.01 ETH
    </CardSubtitle>
    <CardText>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt 
    </CardText>
    <Button color="primary" onClick={toggle}>
        buy now
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>NFT title</ModalHeader>
        <ModalBody>
        <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <br></br>
  <br></br>
  <h4>0.01 ETH</h4>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            buy now
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  </CardBody>
</Card>
      </Container>
    </div>
  )
}


// Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.