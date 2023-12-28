import React from "react";
import ProductCard, {
  // ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";
import { IProduct } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe mug",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffe mug",
  Image: "./coffee-mug2.png",
};

const PRODUCTS: IProduct[] = [product, product2];

const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }
        }

      >
        {
          ({ reset }) => (

            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
