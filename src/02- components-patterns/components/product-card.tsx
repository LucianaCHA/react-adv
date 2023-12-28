import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/use-product";
import { createContext } from "react";
import {
  IInitialValues,
  IProduct,
  IProductContextProps,
  ProductCardProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext; // esta es ,mi fuente de datos


export interface Props {
  product: IProduct;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues: IInitialValues
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
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
};

export default ProductCard;
