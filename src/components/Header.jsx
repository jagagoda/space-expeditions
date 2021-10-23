import React from 'react'
import { Container } from 'react-bootstrap';
import Logo from '../assets/Vector.png'

const Header = () => {

  return (
    <Container>
            <img src={Logo} alt="SpaceX logo" style={{display: "flex", alignItems: "center"}}/>
    </Container>
  )
}

export default Header
