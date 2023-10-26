import { useContext } from "react"

import noProduct from '../assets/no-image.jpg'
import { ProductContext } from "./product-card"

import styles from '../styles/styles.module.css'


export interface Props {
  className?: string
  style?: React.CSSProperties
}

export const ProductImage = ({className, style} : Props) => {

  const {product} = useContext(ProductContext)

  const {img, title} = product
  return <img className={styles.productImg + ' ' + className} src={img ? img : noProduct} alt={img ? title : 'Not available'} style={style}/>
}

export default ProductImage