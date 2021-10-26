import React from 'react'
import Ship from './Ship';
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components';

const EmptyRecordStyled = styled.div`
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
      <Row>
        {items.map(item => {
          return (
            <Col key={item.name} md={6} xl={3}>
              <Ship item={item} key={item.name} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Ships
