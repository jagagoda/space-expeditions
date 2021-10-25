import React from 'react'
import UniversalBox from './UniversalBox';
import { format } from 'date-fns';

const LaunchDate = (props) => {
  const { item } = props;
  const date = item.launch_date_local;

  if (!item) {
    return null;
  }
  return (
    <div className='mt-xl-5 d-flex align-items-xl-end flex-column'>
      <UniversalBox title={"Launch Date"}>
        <p>{format(new Date(date),'d LLL Y')}</p>
      </UniversalBox>
    </div>
  )
}

export default LaunchDate
