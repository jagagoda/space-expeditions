import React from 'react'
import Ship from './Ship';

const Ships = ({items}) => {

  if (!items) {
    return null;
  }else if (items.length === 0) {
    return <h1> No ships to display</h1>
  }
  return (
    <div>
      {items.map(item => {
        return(
          <Ship item={item} key={item.name} />
        )
      })}
    </div>
  )
}

export default Ships
