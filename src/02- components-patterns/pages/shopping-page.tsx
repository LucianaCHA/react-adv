import React from 'react';
import {ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../components/index'

const product = {
  id: '1',
  title: 'Coffe mug',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffe mug',
}

// const PRODUCTS :IProduct[] = [


// ]
const ShoppingPage = () => {
  return <div>
    <h1>Shopping store</h1>
    <hr />
    <div 
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
    >
      {/* import regular  */}
      <ProductCard product={product} >
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
      {/* spread import */}

      <ProductCard product={product2} >
        <ProductCard.Image />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard>

    </div>
  </div>;
}

export default ShoppingPage;