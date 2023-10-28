import React from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/index'

import '../styles/custom-styles.css'
import { IProduct } from '../interfaces/interfaces';

const product = {
  id: '1',
  title: 'Coffe mug',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffe mug',
  img: './coffee-mug2.png'
}

interface IProductInCart extends IProduct {
  quantity: number
}

const PRODUCTS: IProduct[] = [product, product2]
const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = React.useState<{ [key:string] :IProductInCart }>({ // { [key:string] :IProductInCart } esto dice que el key es un string y el valor es un IProductInCart y que espero tener varios de estos dentro de un objeto
  })

  const onProductCountChange =({quantity, product}:{quantity:number, product : IProduct}) => {
    setShoppingCart(oldCart => { // agarra el carrito viejo
      // Mi solucion para eliminar el producto del carrito si la cantidad es 0
      //  if (quantity === 0) { // si la cantidad es 0
      //   const newCart = { ...oldCart } // copia el carrito viejo
      //   delete newCart[product.id] // borra el producto del carrito
      //   return newCart // retorna el carrito nuevo
      // }

      //La solucion de FErnando

      if(quantity === 0) {
        const {[product.id]: toDelete, ...rest} = oldCart // destructura el carrito viejo y crea una variable toDelete que es el producto que se quiere borrar y se copia el resto del carrito en la variable rest
        return rest // retorna el resto del carrito
      }
      
      return {
        ...oldCart, //copio el carrito viejo
        [product.id]: { //agrega la key del producto.id que recibe como argumento
          ...product, // copia el producto
          quantity // agrega la cantidad
        }
      }
    })
  }
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

      {
        PRODUCTS.map((product: IProduct) => (
          <ProductCard 
          product={product} 
          className='bg-dark text-white' 
          key={product.id}
          onChange={onProductCountChange} // definido como {onProductCountChange} significa que el evento es el primer argumento que se manda a la funcion, entonces si el onChange emite algo, lo que sea, se manda a la funcion onProductCountChange y esta deberia esperarlo como primer argumento
           >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))
      }
    </div>
    <div className='shopping-cart'>
      <ProductCard 
      product={product} 
      className='bg-dark text-white' 
      style={{width: '100px'}}

      >
        <ProductImage className='custom-image' />
        <ProductButtons className='custom-buttons' />
      </ProductCard>
      <ProductCard 
      product={product2} 
      className='bg-dark text-white' 
      key={product.id} 
      style={{width: '100px'}}
      >
        <ProductImage className='custom-image' />
        <ProductButtons className='custom-buttons' />
      </ProductCard>

    </div>
    <div>
      <code>
        {JSON.stringify(shoppingCart, null , 5 )}
      </code>
    </div>
  </div>;
}

export default ShoppingPage;