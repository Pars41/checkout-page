import ButtonIncDec from "./ButtonIncDec";
import ButtonRemove from "./ButtonRemove";
const ProductCard = ({product,getProduct}) => {
   return (
  <>
         {product?.map((item)=>{
       const {id,name,amount,dampingRate,price,image} =item;
     return(
     <div key={id} className="mt-2 card mb-2 shadow p-3  bg-white rounded" style={{ maxWidth: "750px" }}>
       <div className="row g-0">
         <div className="col-md-5">
           <img  src={image} className="img-fluid rounded-start" alt="..." />
         </div>
         <div className="col-md-7">
           <div className="card-body">
             <h5 className="card-title">{name}</h5>
             <p className="card-text fs-3 fw-bold text-success">
             💲
              {(dampingRate*price).toFixed(2)}
              <del className="fs-5 text-black fw-normal mx-2">{price}</del>
             </p>
             <ButtonIncDec getProduct={getProduct} id={id} amount={amount} product={product}/>
             <ButtonRemove getProduct={getProduct} id={id}/>
             <p>Product Total: ${amount*((dampingRate*price).toFixed(2))}</p>
           </div>
         </div>
       </div>
     </div>
 )
     })}
  </>

  );
};

export default ProductCard;
