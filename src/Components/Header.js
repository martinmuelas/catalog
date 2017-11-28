import React from 'react';
import styled from 'styled-components';

import background from './assets/header-x1.png';

const Header = props => (
  <Banner>
    <Title>{props.title}</Title>
  </Banner>
);

export default Header;

const Banner = styled.div`
  width: 100%;
  height: 30vw;
  background: url(${background}) no-repeat;
  background-size: cover;
  background-position: top center;
  margin-bottom: 67px;
  color: white;
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 0 3rem 2.6rem;
  
  @media (max-width: 700px) {
    font-size: 3rem;
    margin: 0 0 1rem 2rem;    
  }
`;
