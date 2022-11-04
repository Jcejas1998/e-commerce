import React,{useContext} from 'react'
import { GlobalState } from '../../../GlobalState'




function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    console.log(products);  

  console.log(state);
  return (
    <div>Products List</div>
  )
}

export default Products