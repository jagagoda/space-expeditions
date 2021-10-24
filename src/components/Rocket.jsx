import React from 'react';
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.card {
  background-color: transparent;
  border: none;
}
.card-title {
text-transform: uppercase;
font-size: 16px;
color: #868686;
text-align: left;
}
.card-text {
  color: #FFFFFF;
  font-size: 16px;
   margin-bottom: 20px;
}
`;

const Rocket = (props) => {
  const { item } = props;
  if (!item) {
    return null;
  }
  return (
    <Styles>
      <Card.Title>Rocket</Card.Title>
      <Card.Text>
        {item.rocket_name}
      </Card.Text>
    </Styles>
  )
}

export default Rocket