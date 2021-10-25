import React from 'react'
import { Card } from "react-bootstrap"
import styled from 'styled-components';
import Line from './Line';


const Styles = styled.div`
width: 100%;
.card-img {
  height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.card {
border-radius: 20px;
border: 0;
margin-bottom: 30px;
}
.card-title {
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
  margin-top: 15px;

}
.card-text {
  font-size: 12px;
  font-weight: 500;
  color: #868686;
  padding-left: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
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
        <Line lineColor="#E8E8E8" />
        <Card.Text>HOME PORT {item.home_port}</Card.Text>
        <Card.Text>WEIGHT [KG] {item.weight_kg} </Card.Text>
      </Card>
    </Styles>
  )
}

export default Ship
