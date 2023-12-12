import React, { useContext } from "react";
import { ProductContext } from "./contexts/productContext";

function Produtos() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
