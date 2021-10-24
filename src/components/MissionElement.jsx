import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
h1 {
  font-size: 16px;
  color: #868686;
  text-transform: uppercase;s
}
p {
  font-size: 38px;
  color: #FFFFFF;
}
`;

function MissionElement(props) {
  const { item } = props;

  if (!item) {
    return null;
  }
  return (
    <Styles>
      <h1>Mission</h1>
      <p>{item.mission_name}</p>
    </Styles>
  )
}

export default MissionElement
