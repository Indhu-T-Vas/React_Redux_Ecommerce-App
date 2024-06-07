import React from "react";

export default function ProductListItem(props) {
  return (
    <div className="d-flex m-4 align-items-center justify-content-center">
      <img
        src={props.img}
        height={150}
        width={180}
        alt={props.product_name}
        className="border-radius-9 me-4"
      />

      <h5 className="card-title  me-4">{props.product_name}</h5>
      {/* //mt-2=>margin-top 2 */}
      <h6 className="mt-2 me-4">Price:{`$${props.product_price}`}</h6>
      <h6 className="mt-2 me-4">Description:{props.product_description}</h6>
      <h6 className="mt-2 me-4">Rating:{props.rating}</h6>

      <button className="btn btn-danger ms-3" onClick={props.incrementItem}>
        +
      </button>
      <span className="ms-3">Quantity {props.count}</span>
      <button className="btn btn-danger ms-3" onClick={props.decrementItem}>
        -
      </button>
      <button className="btn btn-danger ms-3" onClick={props.removeItem}>
        Remove
      </button>
    </div>
  );
}
