import React from 'react'
import Logo from '../assets/Vector.png'
import Line from './Line';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledLogo = styled.div`
padding-top: 30px;
padding-bottom: 20px;
`;

const Header = ({ previous, next }) => {
  return (
    <>
      <StyledLogo>
        <div className="d-flex justify-content-between align-items-center">
          <Button className="mb-4" variant="link" onClick={previous}>
            <IoIosArrowBack size={24} color='#fff' />
          </Button>
          <img src={Logo} alt="SpaceX logo" />
          <Button className="mb-4" variant="link" onClick={next}>
            <IoIosArrowForward size={24} color='#fff' />
          </Button>
        </div>
      </StyledLogo>
      <Line />
    </>
  )
}

export default Header
