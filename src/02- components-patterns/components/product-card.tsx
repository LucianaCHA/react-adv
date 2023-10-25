import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/use-product';
import { createContext} from 'react';
import { IProductContextProps, ProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({
} as IProductContextProps) 
const {Provider} = ProductContext // esta es ,mi fuente de datos



export const ProductCard = ({children, product}: ProductCardProps) => {

  const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{product, counter, increaseBy}}>
  <div className={styles.productCard}>
    {/* antes venia asi <img className={styles.productImg} src='./coffee-mug.png' alt='Cofee mug' />
    className={styles.ProductCard} */}
    {/* <img className={styles.productImg} src={img ? img : noProduct} alt='Not available' /> */}
    {/* <span className={styles.productDescription}>{title}</span> */}
    {/* como atomos <ProductImage img={img} title={title} id={id} />
    <ProductTitle title={title} />
    <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
    {children}
    
  </div>
  </Provider>
  );
}

export default ProductCard;