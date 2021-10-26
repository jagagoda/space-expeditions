import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import Ships from '../ShipsContainer/Ships';
import Rocket from '../MissionContainer/Rocket';
import LaunchDate from '../MissionContainer/LaunchDate';
import LaunchSite from '../MissionContainer/LaunchSite';
import Mission from '../MissionContainer/Mission';
import LearnMore from '../MissionContainer/LearnMore';
import Header from '../HeaderContainer/Header';
import styled from 'styled-components';
import Line from '../Line';

const Button = styled.button`
  padding: 15px 40px;
  border: 2px solid #FFFFFF;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  background-color: transparent;
  margin-bottom: 35px;
  margin-top: 30px;
  width: 100%;

  @media(min-width: 576px) {
    width: fit-content;
  }
`;

const TitleStyled = styled.div`
h1 {
  letter-spacing: 1.5px;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #868686;
  text-transform: uppercase;
}
`;

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
      mission_patch
    }
    rocket {
      rocket_name
      rocket {
        active
      }
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Header
        previous={previous}
        previousDisabled={launchIndex === 0}
        next={next}
        nextDisabled={launchIndex === launches.length - 1}
      />

      {launches[launchIndex] &&
        <div className="row">
          <div className="col-md-6">
            <Mission item={launches[launchIndex]} />
            <Rocket item={launches[launchIndex].rocket} />
            <Button onClick={() => setIsModalOpen(true)}>Learn more</Button>
            <LearnMore item={launches[launchIndex]} isOpen={isModalOpen} isClosed={closeModal} />
          </div>
          <div className="col-md-6">
            <LaunchDate item={launches[launchIndex]} />
            <LaunchSite item={launches[launchIndex].launch_site} />
          </div>
          <TitleStyled>
            <Line />
            <h1>Rescue ships</h1>
          </TitleStyled>
          <Ships items={launches[launchIndex].ships} />
        </div>
      }
    </>
  )
}
export default Api
