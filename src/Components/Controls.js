import React from 'react';
import styled from 'styled-components';

import btnNext from './assets/icons/arrow-right.svg';

const Controls = props => (
  <Nav>
    <Container>
      <Pagination>{props.range} of {props.total} products</Pagination>
      <Filters>
        <span>Sort By:</span>
        <button>Most Recent</button>
        <button>Lowest Price</button>
        <button>Highest Price</button>
      </Filters>
      <Buttons>
        <img src={btnNext} alt="Next Page" />
      </Buttons>
    </Container>
  </Nav>
  // <Divider />
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
  flex-wrap: wrap;
  align-items: center;
  padding: 0 2.6rem 0 2.6rem;

  &:after {
    
    content: '';
    flex-basis: 100%;
    border-bottom: 1px solid #d9d9d9;
    margin-top: 24px;
  }

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

const Filters = styled.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  margin-left: 1.5rem;
  flex-grow: 1;
  
  > button {
    font-size: inherit;
    color: inherit;
    margin-left: 1.5rem;
    border: 0;
    padding: 0.75rem 1.5rem;
    background-color: #ededed;
    border-radius: 100px;
  }
`;

const Buttons = styled.div`
`;

// const Divider = styled.div`
//   border-bottom: 1px solid #d9d9d9;
// `;
