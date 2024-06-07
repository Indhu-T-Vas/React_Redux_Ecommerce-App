import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../data/productlist";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/reducer/cart";

export default function Product() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const [alert, setAlert] = useState(false);

  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === props.id);
  const addToCart = () => {
    setAlert(true);
    //setAlert gets false after 3 secs

    setTimeout(() => {
      setAlert(false);
    }, 3000);
    dispatch(addItem(props));
  };
  console.log(props, params.id);
  return (
    <div className="card m-2">
      {alert && <span className="alert alert-success">Item added to Cart</span>}
      <div className="mt-2">
        <img
          src={props.img}
          height={350}
          width={400}
          alt={props.product_name}
          className="border-radius-9"
        />
      </div>
      <div className="mt-3 card-body">
        <h5 className="card-title">{props.product_name}</h5>
        {/* //mt-2=>margin-top 2 */}
        <h6 className="mt-2">Price: {`$${props.product_price}`}</h6>
        <h6 className="mt-2">Description: {props.product_description}</h6>
        <h6 className="mt-2">Rating: {props.rating}</h6>
        <div className="mt-4">
          {props.stock > 0 ? (
            <>
              <button
                className="btn btn-success"
                onClick={() => navigate(`/checkout/${props.id}`)}
              >
                Buy Now
              </button>
              {element?.count > 0 ? (
                <button
                  className="ms-4 btn btn-outline-warning"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </button>
              ) : (
                <button className="ms-4 btn btn-success" onClick={addToCart}>
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button className="btn btn-outline-danger">Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
