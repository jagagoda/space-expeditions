import React, { useState } from 'react'
import styled from 'styled-components'
import UniversalBox from './UniversalBox';

const StylesTooltip = styled.div`
position: relative;
width: 350px;
.launch__modal {
position: absolute;
background-color: #FFFFFF;
border-radius: 4px;
font-size: 14px;
font-weight: 600;
font-family: "Roboto", sans-serif;
color: #000000;
top: -1em;
left: -8em;
padding: 3px 6px;
`;
const Styles = styled.div`
h1 {
  font-size: 16px;
  color: #868686;
  text-transform: uppercase;
}
p {
  font-size: 18px;
  color: #FFFFFF;
}
.launch__name {
cursor: pointer;
}
`;

function LaunchSite(props) {
  const { item } = props;
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  if (!item) {
    return null;
  }
  return (
    <div className='d-flex align-items-xl-end flex-column'>
      <UniversalBox title={"Launch Site"}>
        <Styles>
          <p
            className="launch__name"
            onMouseOver={openModal}
            onMouseLeave={closeModal}>
            {item.site_name}
          </p>

        </Styles>
      </UniversalBox>
      <StylesTooltip>
        {isModalOpen &&
          <p className="launch__modal">{item.site_name_long}</p>
        }
      </StylesTooltip>
    </div>
  )
}

export default LaunchSite