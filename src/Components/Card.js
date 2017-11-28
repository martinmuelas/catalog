import React from 'react';
import styled from 'styled-components';

const Card = ({ product }) => (
  <ProductCard key={product._id}>
    <Thumb src={product.img.url} alt="{product.title}" />
    <Divider />
    <Category>{product.category}</Category>
    <Title>{product.name}</Title>
  </ProductCard>
);

export default Card;

const ProductCard = styled.div`
  background-color: white;
  box-shadow: 2px 2px 4px #ccc;
  display: flex;
  flex-direction: column;
  padding: 18px 24px;
  position: relative;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 8px 8px 24px #999;

    &:before {
      content: '';
      background-image:linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0.8;
      transform: translate(-24px, -18px);
    }
  }
`;

const Thumb = styled.img`
  width: 100%
`;

const Divider = styled.span`
  display: block;
  content: '';
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

const Category = styled.p`
  font-size: 1rem;
  color: #a3a3a3;
  margin: 1.2rem 0 0 0;
`;

const Title = styled.p`
  font-size: 1.125rem;
  color: #616161;
  margin: 0;
`;
