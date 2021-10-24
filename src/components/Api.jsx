import React, { useEffect, useState } from 'react'
import Mission from './Mission';
import { gql, useQuery } from '@apollo/client';
import Button from './Button';
import Ships from './Ships';
import { Container } from 'react-bootstrap'
import Rocket from './Rocket';
import LaunchDate from './LaunchDate';
import LaunchSite from './LaunchSite';

const MISSIONS_QUERY = gql`
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
    }
    ships {
      name
      home_port
      image
      weight_kg
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
    <Container>
      {launches[launchIndex] &&
        <>
          <Mission item={launches[launchIndex]} />
          <LaunchDate item={launches[launchIndex]} />
          <LaunchSite item={launches[launchIndex].launch_site} />
          <Rocket item={launches[launchIndex].rocket} />
          <Ships items={launches[launchIndex].ships} />
        </>
      }

      <div>
        <Button text="previous" onClick={previous} />
        <Button text="next" onClick={next} />
      </div>
    </Container>
  )
}
export default Api
