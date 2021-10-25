import React from 'react'
import Ship from './Ship';
import { Col, Row } from 'react-bootstrap'
import Line from './Line';
import styled from 'styled-components';

const EmptyRecordStyled = styled.div`
display: flex;
justifyContent: center;
alignItems: center;
padding: 20px;
flexDirection: column;
marginTop: 50px;
p{
color: #FFFFFF;
}

`;


const Ships = ({ items }) => {

  if (!items) {
    return null;
  } else if (items.length === 0) {
    return (
      <EmptyRecordStyled>
        <p>No ships to display</p>
      </EmptyRecordStyled>
    )
  }
  return (
    <div>
      <Line />
      <h1>Rescue ships</h1>
      <Row>
        {items.map(item => {
          return (
            <Col md={6} xl={4}>
              <Ship item={item} key={item.name} />
            </Col>
          )
        })}
      </Row>
    </div>

  )
}

export default Ships
