import React from "react";
import "./App.css";
import { Product } from "./components/Product";
import ProductContainer from "./components/ProductContainer";
import data from "./products.json";

const App = () => {
  return (
    <ProductContainer>
      {data.map((product) => (
        <Product 
        key={product.id}
        name={product.name}
        discount={product.discount}
        oldPrice={product.price}
        newPrice={product.price -product.price * product.discount /100} />
      ))}
    </ProductContainer>
  );
};

export default App;
