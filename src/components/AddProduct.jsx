import axios from "axios";
import { useState } from "react";

const AddProduct = ({ getProduct }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [dampingRate, setDampingRate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, image, price, dampingRate, amount };
    setName("");
    setPrice("");
    setAmount("");
    setDampingRate("");
    setImage("");
    postTutorial(newProduct);
    console.log(name);
  };

  const postTutorial = async (newProduct) => {
    const BASE_URL = "https://63f89e7d5b0e4a127de9e14e.mockapi.io/product";
    try {
      await axios.post(BASE_URL, newProduct);
    } catch (error) {
      console.log(error);
    }
    getProduct();
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <div className="w-100 p-4 ">
        <div className="mb-5 ">
          <label htmlFor="exampleFormControlInput1" className="form-label  fs-4">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="exampleFormControlInput1" className="form-label  fs-4">
            Product Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Price"
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="exampleFormControlInput1" className="form-label  fs-4">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Quantity"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="exampleFormControlInput1" className="form-label  fs-4">
            Product DampingRate
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product DampingRate"
            onChange={(e) => setDampingRate(Number(e.target.value))}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="basic-url" className="form-label  fs-4">
            Product Image
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              https://example
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
