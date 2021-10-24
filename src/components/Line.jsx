import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
.break__line {
  width: ${props => props.lineWidth? "260px" : "1300px"};
  height: 1px;
  background-color: ${props => props.lineColor ? "#E8E8E8" : "#5C5C5D"}

}
`;
const Line = () => {
  return (
    <Styles>
      <div class="break__line d-flex justify-content-center"/>
    </Styles>
  )
}

export default Line