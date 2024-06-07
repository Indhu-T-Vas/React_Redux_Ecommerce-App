import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [count, setCount] = useState(15);
  const navigate = useNavigate();

  //if strictmode is mentioned in index.js file then useEffect will be called twice--
  //--so the seconds will decrement by 2, to resolve that remove strictmode alone from that file.
  useEffect(() => {
    setInterval(() => setCount((count) => count - 1), 1000);
    setTimeout(() => navigate("/"), 15000);
  }, [navigate]);
  return (
    <h5 className="mt-5">
      Your order have been placed Successfully. You will be redirected in{" "}
      {count} seconds
    </h5>
  );
}
