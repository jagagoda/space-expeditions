
import React from 'react'
import { Card, Container } from "react-bootstrap"


function Mission(props) {
const {item} = props;

  if(!item) {
    return null;
  }

  return (
    <Container>
      <Card>
        {item.mission_name}
      </Card>
      <Card>
        {item.launch_date_local}
      </Card>
    </Container>
  )
}

export default Mission
