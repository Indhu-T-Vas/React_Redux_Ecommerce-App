import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className="card m-2 cursor-pointer"
      style={{ width: 300 }}
      role="button"
      onClick={() => navigate(`/product/${props.id}`)}
    >
      <div className="mt-2">
        <img
          src={props.img}
          height={150}
          width={180}
          alt={props.product_name}
          className="border-radius-9"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.product_name}</h5>
        {/* //mt-2=>margin-top 2 */}
        <h6 className="mt-2">Price: {`$${props.product_price}`}</h6>
        <h6 className="mt-2">Description: {props.product_description}</h6>
        <h6 className="mt-2">Rating: {props.rating}</h6>
        <div className="mt-4">
          {props.stock > 0 ? (
            <button className="btn btn-success">Available</button>
          ) : (
            <button className="btn btn-outline-danger">Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
