import { ReactElement } from "react"

export interface ProductCardProps {
  children?: ReactElement | ReactElement[]
  product: IProduct
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
  ({ children, product }: ProductCardProps) : JSX.Element
  Title: ({title}: {title?: string}) => JSX.Element;
  Image: ({img}: {img?: string}) => JSX.Element;
  Buttons: () => JSX.Element;
}