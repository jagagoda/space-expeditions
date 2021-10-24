import React from 'react'
import Logo from '../assets/Vector.png'
import Line from './Line'

const Header = (props) => {
  return (
    <div class="d-flex align-items-center justify-content-center classes"
    style={{
      paddingTop: "60px",
      paddingBottom: "40px",
      display: "flex",
      flexDirection: "column"}}>
      <img src={Logo} alt="SpaceX logo" style={{marginBottom: "40px"}}/>
      <Line />
    </div>
  )
}

export default Header
