import React from 'react';
import UniversalBox from './UniversalBox';
import styled from 'styled-components';

const Styles = styled.div`
h5 {
  color: #FFFFFF;
  font-size: 18px;
}
span {
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 10px;
  color: #000000;
  background-color: ${props => props.variant === 'red' ? '#BE4E35' : '#6FB46E'};
  `;

const Rocket = (props) => {
  const { item } = props;

  if (!item) {
    return null;
  }
  return (
    <UniversalBox title="Rocket">
      <Styles>
        <h5>{item.rocket_name}
          <span
            className='badge'
            variant={item.rocket.active ? 'green' : 'red'}>
            {item.rocket.active ? "Recovered" : "Unrecovered"}
          </span>
        </h5>
      </Styles>
    </UniversalBox>
  )
}

export default Rocket