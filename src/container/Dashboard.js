import React from "react";
import { ProductList } from "../data/productlist";
import ProductCard from "../components/productCard";

export default function Dashboard() {
  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
      {ProductList.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}
