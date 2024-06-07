import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="p-3 bg-secondary"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        <h2>Shopping</h2>
        <div className="row justify-content-center pt-2 pb-1">
          <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex">
            <button
              className="btn btn-success me-4"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              style={{ width: "1200px" }}
            />
            <button
              className="btn btn-success ms-4"
              onClick={() => navigate("/cart")}
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
