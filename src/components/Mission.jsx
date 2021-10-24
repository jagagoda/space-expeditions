import React from 'react'
import { Card } from "react-bootstrap"
import styled from 'styled-components'

const Styles = styled.div`
.card-title {
text-transform: uppercase;
font-size: 16px;
color: #868686;
text-align: left;
}
.card-text {
  color: #FFFFFF;
  font-size: 40px;
  margin-bottom: 30px;
}
`;

function Mission(props) {
  const { item } = props;

  if (!item) {
    return null;
  }

  return (
    <Styles>
      <Card.Title>Mission</Card.Title>
      <Card.Text>{item.mission_name}</Card.Text>
    </Styles>
  )
}

export default Mission
