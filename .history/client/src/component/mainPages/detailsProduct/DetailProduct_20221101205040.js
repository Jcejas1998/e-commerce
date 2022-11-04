import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState} from "../../../GlobalState";

function DetailProduct() {
  const params = useParams()
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  const [detailProduct,setDetailProduct]=useState([])

  useEffect(()=>{
    if(params){
      products.forEach(product=>{
        if(product._id === params.id) setDetailProduct(product)
      })
    }
  },[params,products])


  console.log(detailProduct);
  if(detailProduct.length === 0) return null
  return (
    <div className="detail">
      <img src={detailProduct.images.url} alt=''/>
      <div className="row">
            <h2>{detailProduct.title}</h2>
            <h6>{detailProduct.product._id}</h6>
      </div>
      <span>${detailProduct.price}</span>
      <p>{detailProduct.description}</p>
    </div>
  )
}

export default DetailProduct

// import React, { useContext, useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { GlobalState } from "../../../GlobalState";

// function DetailProduct() {
//   const params = useParams();
//   const state = useContext(GlobalState)
//   const [products] = state.productsAPI.products
//   const [detailProduct, setDetailProduct] = useState([]);

//   useEffect(() => {
//     if (params) {
//       products.forEach(product => {
//         if (product._id === params.id) setDetailProduct(product);
//       });
//     }
//   }, [params, products]);

//   console.log(detailProduct)
//   if(detailProduct.length === 0) return null
//   return (
//         <div className="detail">
//               <img src={detailProduct.image.url} alt=''/>
//         </div>
//   )
// }

// export default DetailProduct;