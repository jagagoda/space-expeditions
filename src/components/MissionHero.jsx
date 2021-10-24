import React from 'react'
import Mission from './Mission'
import Rocket from './Rocket';
import { Container, Card } from 'react-bootstrap';
import styled from 'styled-components'
import LaunchDate from './LaunchDate';
import LaunchSite from './LaunchSite';

const Styles = styled.div`
.card {
  background-color: transparent;
  border: none;
}
.card-title {
text-transform: uppercase;
font-size: 16px;
color: #868686;
text-align: left;

}
`;
const MissionHero = () => {
  return (
    <Styles>
      <Container>
        <Card>
          <Mission />
          <Rocket />
        </Card>
        <Card>
        <LaunchDate />
        <LaunchSite />
        </Card>
      </Container>
    </Styles>
  )
}

export default MissionHero