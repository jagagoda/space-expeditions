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

const LaunchSite = (props) => {
  const { item } = props;
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const openTooltip = () => setIsTooltipOpen(true)
  const closeTooltip = () => setIsTooltipOpen(false)

  if (!item) {
    return null;
  }
  return (
    <div className='d-flex align-items-xl-end flex-column'>
      <UniversalBox variant="right" title={"Launch Site"}>
        <p
          className="launch__name text-sm-start text-md-end text-xl-end"
          onMouseOver={openTooltip}
          onMouseLeave={closeTooltip}>
          {item.site_name}
        </p>
      </UniversalBox>
      <StylesTooltip>
        {isTooltipOpen &&
          <p className="launch__modal">{item.site_name_long}</p>
        }
      </StylesTooltip>
    </div>
  )
}

export default LaunchSite