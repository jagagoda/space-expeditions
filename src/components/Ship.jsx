import React from 'react'

const Ship = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div>
    {item.name}
    </div>
  )
}

export default Ship
