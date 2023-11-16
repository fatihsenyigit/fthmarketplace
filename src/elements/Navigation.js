import React, { useContext } from 'react'
import { Web3Data } from '../context/Web3Context'
import { Container, Row, Col, Button, Badge } from 'reactstrap'
import { formatAddress, formatBalance } from './Helper'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const {provider, address, balance} = useContext(Web3Data)
  return (
    <>
    <Container style={{marginTop:20}}>
      <Row>
        <Col xs="8"><Button size='lg' style={{marginRight:30}}  color='success'><Link style={{color:'white',
          textDecoration: "none"}} to="/">FTH MarketPlace</Link></Button>
          <Badge  color='info' style={{marginRight:10}}><Link style={{color:'black',
          textDecoration: "none"}} to="/CreateNFT" >Create NFT</Link></Badge>
          <Badge color='info' style={{marginRight:10}}><Link style={{color:'black',
          textDecoration: "none"}} to="/MyNFTs">My NFTs</Link></Badge>
          <Badge color='info'><Link style={{color:'black',
          textDecoration: "none"}} to="/SellNFT">Sell NFTs</Link></Badge>

          </Col>
        <Col>{provider && !address ? (
          <Button>Connect Metamask</Button>
        ) : provider && address ? (
          <>
          <Button size='sm' style={{marginRight:10}} color='warning'> Account: {formatAddress(address)}</Button>
          <Button size='sm' color='warning'>ETH: {formatBalance(balance)}</Button>
          {/* <Button color='warning'>USDT: {fthBalance}</Button> */}
          </>
          ) : (
            <Button >
          {" "}
          <a
            href="https://metamask.io/download/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Metamask{" "}
          </a>
        </Button>
        )}
          </Col>
      </Row>
    </Container>

    
  </>
  )
}
