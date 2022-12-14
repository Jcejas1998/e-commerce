import React,{useContext} from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'



function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products



    return (
    <div className='products'>
      {
        products.map(products=>{
          return <ProductItem key={product._id}/>
        })
      }
      </div>
  )
}

export default Products