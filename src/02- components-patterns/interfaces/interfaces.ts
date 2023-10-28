import { Props as IProductCardProps } from "../components/product-card"
import { Props as ITitleProps } from "../components/product-title"
import { Props as IImageProps } from "../components/product-image"
import { Props as IButtonsProps } from "../components/product-buttons"

export interface IProduct {
  id: string
  title: string
  img?: string
}

export interface IProductContextProps {
  product: IProduct
  counter: number
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product }: IProductCardProps): JSX.Element
  Title: (Props: ITitleProps) => JSX.Element;
  Image: (Props: IImageProps) => JSX.Element;
  Buttons: ({ className }: IButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  quantity: number
  product: IProduct
}