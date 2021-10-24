import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import Button from './Button';
import Ships from './Ships';
import { Container } from 'react-bootstrap'
import Rocket from './Rocket';
import LaunchDate from './LaunchDate';
import LaunchSite from './LaunchSite';
import MissionElement from './MissionElement';
import Line from './Line';

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
        <div class="row">
          <div class="col-md-6">
            <MissionElement item={launches[launchIndex]} />
            <Rocket item={launches[launchIndex].rocket} />
            <button style={{ padding: "15px 30px", border: "2px solid #FFFFFF", color: "white", fontSize: "14px", textTransform: "uppercase", backgroundColor: "transparent", marginBottom: "45px", marginTop: "20px" }}>Learn more</button>
          </div>
          <div class="col-md-6">
            <LaunchDate item={launches[launchIndex]} />
            <LaunchSite item={launches[launchIndex].launch_site} />
          </div>
          <Line />
          <div class="row">
            <div class="col-sm">
              <Ships items={launches[launchIndex].ships} />
            </div>
          </div>
        </div>
      }
      <div>
        <Button text="previous" onClick={previous} />
        <Button text="next" onClick={next} />
      </div>
    </Container>
  )
}
export default Api
