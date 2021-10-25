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
      <h5>{item.rocket_name}<span className="badge bg-success">{item.rocket.active ? "Recovered" : "Unrecovered"}</span></h5>
    </UniversalBox>
  )
}

export default Rocket