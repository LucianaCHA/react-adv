import { useContext } from "react"

import noProduct from '../assets/no-image.jpg'
import { ProductContext } from "./product-card"

import styles from '../styles/styles.module.css'


export const ProductImage = () => {

  const {product} = useContext(ProductContext)

  const {img, title} = product
  return <img className={styles.productImg} src={img ? img : noProduct} alt={img ? title : 'Not available'} />
}

export default ProductImage