import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
position: relative;
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
const UniversalBox = (props) => {
  const { title, children } = props;

  return (
    <Styles>
      <h1>{title}</h1>
      {children}
    </Styles>
  )
}

export default UniversalBox;