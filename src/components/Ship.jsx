import React from 'react'
import { Card } from "react-bootstrap"
import styled from 'styled-components';


const Styles = styled.div`
.card-img {
  height: 360px;
  width: 340px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.card {
height: 390px;
width: 340px;
border-radius: 20px;
border: 0;
margin: 30px;
}
.card-title {
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
  margin-top: 5px;

}
.card-text {
  font-size: 12px;
  font-weight: 500;
  color: #868686;
  padding-left: 10px;
  margin-bottom: 6px;
  margin-top: 5px;

}

`;
const Ship = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <Styles>
      <Card>
        <Card.Img src={item.image} />
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>HOME PORT {item.home_port}</Card.Text>
        <Card.Text>WEIGHT [KG] {item.weight_kg} </Card.Text>
      </Card>
    </Styles>
  )
}

export default Ship
