import React from 'react'
import { Container } from "react-bootstrap"
import Header from './Header';
import Mission from './Mission'

function Home() {
  return (
    <Container>
      <Header />
      <Mission />
    </Container>
  )
}

export default Home;