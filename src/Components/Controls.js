import React from 'react';
import styled from 'styled-components';

const Controls = props => (
  <Nav>
    <Container>
      <Pagination>{props.range} of {props.total} products</Pagination>
      <Filters />
      <Buttons />
    </Container>
  </Nav>
);

export default Controls;


const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
 `;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  padding: 0 2.6rem 0 2.6rem;
  
  @media (max-width: 700px) {
    padding: 0 1rem 0 1rem;
  }  
`;

const Pagination = styled.div`
  font-size: 1.5rem;
  color: #616161;
  padding: 0.75rem 1.5rem 0.75rem 0;
  border-right: 1px solid #d9d9d9;
  
`;

const Filters = styled.div``;

const Buttons = styled.div``;
