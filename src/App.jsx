import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
}, []);
  return (
    <div className="app">
      <h1>Product Listing - 2500032388</h1>
      {products.length === 0 ? ( <p>No products available</p>) :
      (<ProductList products={products} />)
      }
    </div>
  )
}