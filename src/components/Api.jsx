import React, { useEffect, useState } from 'react'
import Mission from './Mission';
import { gql, useQuery } from '@apollo/client';
import Button from './Button';
import Ships from './Ships';

const MISSIONS_QUERY = gql`
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    ships {
      name
      home_port
      image
    }
  }
}
`;

const Api = () => {
  const { loading, data } = useQuery(MISSIONS_QUERY);
  const [launches, setLaunches] = useState([]);
  const [launchIndex, setLaunchIndex] = useState(0);

  useEffect(() => {
    if (loading) {
        return;
    }
    setLaunches(data.launchesPast);
  }, [loading, data]);

  const next = () => {
    const index = launchIndex + 1;

    if (index > launches.length - 1) {
      return;
    }

    setLaunchIndex(index);
  }
  const previous = () => {
    const index = launchIndex - 1;
    if (index < 0) {
      return;
    }
    setLaunchIndex(index)
  }

  return (
    <div>
          {launches[launchIndex] &&
        <>
          <Mission item={launches[launchIndex]} />
          <Ships items={launches[launchIndex].ships} />
        </>
      }
      <Button text="previous" onClick={previous} />
      <Button text="next" onClick={next} />

    </div>
  )
}
export default Api
