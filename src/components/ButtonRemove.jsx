import axios from "axios";
import { AiFillDelete} from "react-icons/ai";
const ButtonRemove = ({id,getProduct}) => {
  const handleRemove = async (id) =>{
    const BASE_URL = "https://63f89e7d5b0e4a127de9e14e.mockapi.io/product";
    try {
      await axios.delete(`${BASE_URL}/${id}`)
    } catch (error) {
      console.log(error)
      
    }
    getProduct()
  }
  return (
    <button onClick={()=>handleRemove(id)} style={{width: "100%"}} type="button" className="btn btn-danger fw-bold py-0 pb-1 mb-3" ><span className="fs-5"><AiFillDelete/></span>  Remove</button>
  )
}

export default ButtonRemove