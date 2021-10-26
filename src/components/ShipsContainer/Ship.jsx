import React from 'react'
import { Card } from "react-bootstrap"
import styled from 'styled-components';
import Line from '../Line';

const StyledShipDetails = styled.div`
margin-top: 15px;
margin-bottom: 15px;
`;
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
  h5 {
  font-size: 12px;
  font-weight: 500;
  color: #868686;
  padding-left: 15px;
}
span {
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  margin-left: 32px;
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
        <StyledShipDetails>
          <h5>HOME PORT<span>{item.home_port}</span></h5>
          <h5>WEIGHT [KG]
            {item.weight_kg ?
              <span>{item.weight_kg}</span> : <span>No data available</span>}</h5>
        </StyledShipDetails>
      </Card>
    </Styles>
  )
}

export default Ship
