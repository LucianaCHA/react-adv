import { ReactElement } from "react"
import { Props as ProductButtonsProps } from '../components/product-buttons';
import { Props as ProductImageProps } from '../components/product-image';
import { Props as ProductTitleProps } from '../components/product-title';

export interface ProductCardProps {
  children?: ReactElement | ReactElement[]
  product: IProduct
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export interface IProduct {
  id :string
  title: string
  img?: string
}

export interface IProductContextProps  {
  product: IProduct
  counter: number
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
}

export interface onChangeArgs {
  product: IProduct;
  count: number;
}


export interface IProductInCart extends IProduct {
  count: number
}