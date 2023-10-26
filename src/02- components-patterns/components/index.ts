import { ProductCard as ProductCardHOC } from './product-card'
import ProductTitle from './product-title'
import ProductImage from './product-image'
import ProductButtons from './product-buttons'
import { ProductCardHOCProps } from '../interfaces/interfaces'

export { ProductImage } from './product-image'
export { ProductTitle } from './product-title'
export { ProductButtons } from './product-buttons'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, { // Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export default ProductCard