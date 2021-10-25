import React from 'react'
import styled from 'styled-components'
import UniversalBox from './UniversalBox';

const Styles = styled.div`
p {
  font-size: 38px;
  color: #FFFFFF;
}
`;

function Mission(props) {
  const { item } = props;

  if (!item) {
    return null;
  }
  return (
    <Styles className=' mt-3 mt-xl-5'>
      <UniversalBox title="mission">
        <p>{item.mission_name}</p>
      </UniversalBox>
    </Styles>
  )
}

export default Mission
