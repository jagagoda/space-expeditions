import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 1px;
  background-color: ${props => props.lineColor};
  margin: 0 5px;
`;

const Line = (props) => {
  console.log(props);
  return (
    <StyledDiv lineColor={props.lineColor} />
  )
}

Line.defaultProps = {
  lineColor: "#5C5C5D",
};

export default Line