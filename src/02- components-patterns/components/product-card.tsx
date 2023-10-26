import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/use-product';
import { createContext } from 'react';
import { IProduct, IProductContextProps } from '../interfaces/interfaces';
import { ReactElement } from "react"

export const ProductContext = createContext({
} as IProductContextProps)
const { Provider } = ProductContext // esta es ,mi fuente de datos



export interface Props {
  product: IProduct
  children?: ReactElement | ReactElement[]
  className?: string
  style?: React.CSSProperties
}


export const ProductCard = ({ children, product, className, style }: Props) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div
        className={styles.productCard + ' ' + className}
        style={style}
      >
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