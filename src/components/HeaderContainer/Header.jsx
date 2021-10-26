import React from 'react'
import Logo from '../../assets/Vector.png'
import Line from '../Line';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledLogo = styled.div`
padding-top: 50px;
padding-bottom: 20px;
`;

const Header = ({ previous, previousDisabled, next, nextDisabled }) => {
  return (
    <>
      <StyledLogo>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            disabled={previousDisabled}
            className="mb-4"
            variant="link"
            onClick={previous}>
            <IoIosArrowBack size={24} color={previousDisabled ? '#5C5C5D' : '#fff'} />
          </Button>
          <img src={Logo} alt="SpaceX logo" />
          <Button
            disabled={nextDisabled}
            className="mb-4"
            variant="link"
            onClick={next}>
            <IoIosArrowForward size={24} color={nextDisabled ?'#5C5C5D' : '#fff'} />
          </Button>
        </div>
      </StyledLogo>
      <Line />
    </>
  )
}

export default Header
