import React from 'react'
import { Container } from "react-bootstrap"
import Header from './Header';
import MissionHero from './MissionHero';

function Home() {
  return (
    <Container>
      <Header />
      <MissionHero/>
    </Container>
  )
}

export default Home;