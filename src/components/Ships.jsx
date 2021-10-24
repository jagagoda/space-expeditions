import React from 'react'
import Ship from './Ship';
import Rocket from '../assets/ROCKETLAUNCH.gif'
import { Container } from 'react-bootstrap'
const Ships = ({ items }) => {

  if (!items) {
    return null;
  } else if (items.length === 0) {
    return (
      <div style={{ display: "flex",  justifyContent: "center", alignItems: "center", padding: "20px", flexDirection: "column"}}>
        <img style={{ width: "340px", height: "360px", borderRadius: "20px"}}src={Rocket} alt="rocket"/>
       <h1 style={{color: "#FFFFFF"}}> No ships to display </h1>
      </div>
    )
  }
  return (
    <Container>
    <div class="d-flex justify-content-center">
      {items.map(item => {
        return (
          <Ship item={item} key={item.name} />
        )
      })}
    </div>
    </Container>
  )
}

export default Ships
