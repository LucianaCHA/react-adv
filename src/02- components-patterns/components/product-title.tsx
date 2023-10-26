import { useContext } from "react"
import { ProductContext } from "./product-card"

import styles from '../styles/styles.module.css'

export interface Props {
  className?: string
  title?: string
  style?: React.CSSProperties
}

export const ProductTitle = ({className, title, style} : Props) => {
  const {product} = useContext(ProductContext)

  const productTitle = product.title
  return <span className={styles.productDescription + ' ' + className} style={style}>{title ? title : productTitle}</span>
}  


export default ProductTitle