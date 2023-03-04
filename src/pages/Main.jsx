import AddProduct from "../components/AddProduct";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const Main = () => {
  const [product, setProduct] = useState([]);
  const [show, Setshow] = useState(false);


  const BASE_URL = "https://63f89e7d5b0e4a127de9e14e.mockapi.io/product";
  const handleShow = () => {
    Setshow(!show);
  };
  const getProduct = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  //? componentDidMount
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="main-contain">
      <Header />
      <Button handleShow={handleShow} show={show}/>
      <div className="main-content d-flex gap-5 justify-content-evenly px-4">
      {show ? <AddProduct product={product} getProduct={getProduct} /> : null}

        
        <div className="d-flex flex-column gap-3 justify-content-center">
          <ProductCard product={product} getProduct={getProduct} />
          <CardTotal product={product} />
        </div>
      </div>
    </div>
  );
};
export default Main;
