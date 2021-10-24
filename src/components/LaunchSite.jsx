import React, { useState } from 'react'
import { Card } from "react-bootstrap"
import styled from 'styled-components'

const Styles = styled.div`
.card-title {
text-transform: uppercase;
font-size: 16px;
color: #868686;
text-align: left;
}
.card-text {
  color: #FFFFFF;
  font-size: 16px;
  margin-bottom: 30px;
}
`;

function LaunchSite(props) {
  const { item } = props;
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!item) {
    return null;
  }
  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <Styles>
      <Card.Title>Launch Site</Card.Title>
      <Card.Text>{item.site_name}</Card.Text>
      {isModalOpen &&
        <p onClick={openModal}>{item.site_name_long}</p>
      }
    </Styles>
  )
}

export default LaunchSite