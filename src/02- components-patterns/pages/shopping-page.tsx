import React from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/index'

import '../styles/custom-styles.css'

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
  return <div >
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
      <ProductCard product={product} className='bg-dark text-white' >
        <ProductImage className='custom-image' />
        <ProductTitle className='text-white' />
        <ProductButtons className='custom-buttons' />
      </ProductCard>
      {/* spread import */}

      <ProductCard product={product2} className='bg-dark text-white' >
        <ProductCard.Image className='custom-image' />
        <ProductCard.Title className='text-white' />
        <ProductCard.Buttons className='custom-buttons' />
      </ProductCard>

      {/* para traajar con css properties y permitir sobeescribir estilos */}
      <ProductCard
        product={product}
        className='bg-dark text-white'
        style={{
          backgroundColor: "#c29436"
        }}
      >
        <ProductImage className='custom-image'
          style={{
            filter: 'sepia(100%)',
            borderRadius: '20%',
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'

          }}
        />
        <ProductTitle className='text-white'
          style={{
            fontSize: '1.5rem',
            color: '#fa414a',
          }}
        />
        <ProductButtons className='custom-buttons'
          style={{
            justifyContent: 'end'
          }}
        />
      </ProductCard>

    </div>
  </div>;
}

export default ShoppingPage;