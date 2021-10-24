import React, { useState } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
h1 {
  font-size: 16px;
  color: #868686;
  text-transform: uppercase;
  position: relative;
}
p {
  font-size: 18px;
  color: #FFFFFF;
}
.launch__name {
cursor: pointer;
}
.launch__modal {
position: absolute;
background-color: #FFFFFF;
border-radius: 4px;
font-size: 14px;
font-weight: 600;
font-family: "Roboto", sans-serif;
color: #000000;
top: 30%;
right: 46%;
padding: 3px 6px;
}
`;

function LaunchSite(props) {
  const { item } = props;
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  if (!item) {
    return null;
  }
  return (
    <Styles>
      <h1>Launch Site</h1>
      <p className="launch__name" onMouseOver={openModal} onMouseLeave={closeModal}>{item.site_name}</p>
      {isModalOpen &&
        <p className="launch__modal">{item.site_name_long}</p>
      }
    </Styles>
  )
}

export default LaunchSite