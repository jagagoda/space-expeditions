import React from 'react'
import styled from 'styled-components'
import UniversalBox from './UniversalBox';


const MissionName = styled.p`
  font-size: 38px  !important;
  color: #FFFFFF;
`;

function Mission(props) {
  const { item } = props;

  if (!item) {
    return null;
  }
  return (
    <UniversalBox
      title="mission"
      className='mt-3 mt-xl-5'>
      <MissionName> {item.mission_name}</MissionName>
    </UniversalBox>
  )
}

export default Mission
