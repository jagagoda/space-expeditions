import React from 'react';
import UniversalBox from './UniversalBox';


const Rocket = (props) => {
  const { item } = props;

  console.log(item);

  if (!item) {
    return null;
  }
  return (
    <UniversalBox title="Rocket">
      <p>
        {item.rocket_name}
      </p>
      <p>{item.rocket.active ? "Recovered" : "Unrecovered"}</p>
    </UniversalBox>
  )
}

export default Rocket