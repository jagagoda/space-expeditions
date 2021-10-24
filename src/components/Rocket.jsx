import React from 'react';
import styled from 'styled-components'

const Styles = styled.div`
h1 {
  font-size: 16px;
  color: #868686;
  text-transform: uppercase;
}
p {
  font-size: 18px;
  color: #FFFFFF;
}
`;

const Rocket = (props) => {
  const { item } = props;
  if (!item) {
    return null;
  }
  return (
    <Styles>
      <h1>Rocket</h1>
      <p>
        {item.rocket_name}
      </p>
    </Styles>
  )
}

export default Rocket