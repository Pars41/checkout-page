import React from "react";

const CardTotal = ({product}) => {
  let subtotal = 0;

  {product.map((item)=> {
    const {price,amount,dampingRate} = item
    return(
      subtotal = subtotal+(amount*((dampingRate*price).toFixed(2)))
    )
  } )}
  // console.log(subtotal);
  return (
      <div className="card subtotal my-3" style={{ width: "100%" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item my-2">
            <div className="d-flex fs-4  justify-content-between">
              <span>
                <b>Subtotal</b>
              </span>
              <span>💲{subtotal} </span>
            </div>
          </li>
          <li className="list-group-item my-2">
            <div className="d-flex fs-4  justify-content-between">
              <span>
                <b>Tax</b>
              </span>
              <span>(18%)</span>
            </div>
          </li>
          <li className="list-group-item my-2">
            {" "}
            <div className="d-flex fs-4  justify-content-between">
              <span>
                <b>Shipping</b>
              </span>
              <span>💲25</span>
            </div>
          </li>
          <li className="list-group-item my-2">
            {" "}
            <div className="d-flex fs-4 justify-content-between">
              <span>
                <b>Total</b>
              </span>
              <span>💲{((subtotal*1.18)+25).toFixed(2)} </span>
            </div>
          </li>
        </ul>
      </div>
  );
};

export default CardTotal;
