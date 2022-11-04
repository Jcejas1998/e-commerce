import React,{useContext} from 'react'
import { GlobalState } from '../../../GlobalState'




function Products() {
  const state = useContext(GlobalState)
  return (
    <div>Products List</div>
  )
}

export default Products