/* eslint react/no-did-mount-set-state:0 */
import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './assets/aerolab-logo.svg';
import coin from './assets/icons/coin.svg';

class Navbar extends Component {
  state = {
    user: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://aerolab-challenge.now.sh/user/me', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjYTEwM2U0OTYwMDAwNjBkMDBhN2MiLCJpYXQiOjE1MTA3NzcwOTF9.wt6n91BKnoumGAowj69ZShxNBYtgCe1Kkt7ONvwmwpg',
          'Content-Type': 'application/json',
        },
      });
      const user = await res.json();
      this.setState({ user });
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Nav>
        <Container>
          <BrandLogo src={logo} alt="Aerolab Logo" />
          <Items>
            <UserName>{this.state.user.name}</UserName>
            <PointsBadge>
              <span>{this.state.user.points}</span>
              <img src={coin} alt="Points" />
            </PointsBadge>
          </Items>
        </Container>
      </Nav>
    );
  }
}

export default Navbar;

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

const BrandLogo = styled.img`
  display: inline-block;
  height: 36px;
  width: 39px;
`;

const Items = styled.div`
  font-size: 1.5rem;
  color: #616161;
  display: flex;
  justify-content: flex-end;
  flex-grow: 2;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
`;

const PointsBadge = styled.div`      
  display: flex;
  align-items: center;
  padding: 0 12px 0 13px;
  margin-left: 18px;
  height: 48px;
  background: #ededed;
  border-radius: 100px;

  > img {
    margin-left: 6px;
  }        
`;
