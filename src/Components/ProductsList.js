import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Controls from './Controls';

class ProductsList extends Component {
  state = {
    products: [],
    page: 1,
    sorting: '',
  };

  async componentWillMount() {
    try {
      const res = await fetch('https://aerolab-challenge.now.sh/products', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjYTEwM2U0OTYwMDAwNjBkMDBhN2MiLCJpYXQiOjE1MTA3NzcwOTF9.wt6n91BKnoumGAowj69ZShxNBYtgCe1Kkt7ONvwmwpg',
          'Content-Type': 'application/json',
        },
      });
      const products = await res.json();
      this.setState({ products });
      // console.log(products);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { products, page } = this.state;
    const PRODUCTS_PER_PAGE = 16;

    const lastIndex = products.length - 1;
    const fromIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const toIndex = fromIndex + PRODUCTS_PER_PAGE < lastIndex ? fromIndex + PRODUCTS_PER_PAGE : products.length;

    let productsToShow = [];

    // console.log(`Sorting Method: ${this.state.sorting}`);
    switch (this.state.sorting) {
      case 'Lowest Price':
        productsToShow = products.sort((a, b) => (a.cost > b.cost ? 1 : -1)).slice(fromIndex, toIndex);
        break;
      case 'Highest Price':
        productsToShow = products.sort((a, b) => (a.cost < b.cost ? 1 : -1)).slice(fromIndex, toIndex);
        break;
      default:
        productsToShow = products.slice(fromIndex, toIndex);
    }

    return (
      <div>
        <Controls range={toIndex} total={products.length} />
        <ProductGrid>
          {productsToShow.map(product => <Card key={product._id} product={product} />)}
        </ProductGrid>
      </div>
    );
  }
}

export default ProductsList;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  grid-gap: 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 48px;
  padding: 0 2.6rem 0 2.6rem;
  
  @media (max-width: 700px) {
    padding: 0 1rem 0 1rem;
  }
`;
