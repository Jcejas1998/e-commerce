import React,{useContext,useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [detailProduct, setDetailProduct]=useState([])

    console.log(params);
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct