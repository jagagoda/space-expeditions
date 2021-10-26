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
    <UniversalBox
      variant="right"
      title={"Launch Date"}
      className='mt-1 mt-xl-5 d-flex align-items-xl-end flex-column'>
      <p className='text-sm-start text-md-end text-xl-end'>{format(new Date(date), 'd LLL Y')}</p>
    </UniversalBox>
  )
}

export default LaunchDate
