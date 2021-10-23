import { useQuery } from '@apollo/client';
import React from 'react'
import { Card } from "react-bootstrap"
import { gql } from "@apollo/client";

const MISSION_QUERY = gql`
{
  launchesPast(limit: 10) {
      id
      mission_name
  }
}
`;

function Mission() {
  const {data, loading, error } = useQuery(MISSION_QUERY);
  if(loading) return "Loading...";
  if(error) return <pre>{error.message}</pre>

  return (
    <Card>
      <h1>Mission</h1>
      <ul>
      {data.launchesPast.map((launch) => (
        <li key={launch.id}>{launch.mission_name}</li>
      ))}
      </ul>
    </Card>
  )
}

export default Mission
