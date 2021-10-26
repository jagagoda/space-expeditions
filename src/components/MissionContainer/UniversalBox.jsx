import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
h1 {
  font-size: 16px;
  color: #868686;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
p {
  font-size: 18px;
  color: #FFFFFF;
}
`;

const UniversalBox = (props) => {
  const { title, variant, className, children } = props;

  return (
    <Styles className={className}>
      <h1 className={`text-xl-${variant === 'left' ? 'start' : 'end'} text-sm-left text-md-${variant === 'left' ? 'start' : 'end'}`}>
        {title}
      </h1>
      {children}
    </Styles>
  )
}

UniversalBox.defaultProps = {
  variant: 'left'
}

export default UniversalBox;