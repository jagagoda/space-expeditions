import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
.break__line {
  width: ${props => props.primary ? "1140px" : "260px"};
  height: 1px;
  background-color: #E8E8E8;

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