import axios from "axios";
import {AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useState } from "react"

const ButtonIncDec = ({product,getProduct,id,amount}) => {
    const [decrease, setDecrease] = useState(amount)

    // const editTutorial = async ({ id, title, description }) => {
    //   const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials"
    //   try {
    //     await axios.put(`${BASE_URL}/${id}/`, { title, description })
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   getTutorials()
    // }
    {product.map((item)=> {
      const {price,amount,dampingRate,id} = item
      // console.log(price,amount,dampingRate,id)
     
    } )}
    const handleDecrease = async (name,id,image,price,amount,dampingRate) =>{
      const BASE_URL = "https://63f89e7d5b0e4a127de9e14e.mockapi.io/product";
      try {
        await axios.put(`${BASE_URL}/:${1}`,
        {id,
        name,
        image,
        price,
        dampingRate,
        amount: (amount-1),
        })
        console.log();
      } catch (error) {
        console.log(error)
        
      }
      getProduct()
    }
  return (
    <div className="ınc-dec">
        <button className="btn btn-secondary my-1 p-1" onClick={(e) => handleDecrease({id:1,name:"kuri",amount:amount-1,price:4141})}><AiOutlineMinus/></button>
        <p className="fs-4">{amount}</p>
        <button className="btn btn-secondary my-1 p-1"><AiOutlinePlus/></button>
    </div>
  )
}

export default ButtonIncDec