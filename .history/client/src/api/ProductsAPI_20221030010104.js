import React,{useState, useEffect} from 'react'
import axios from 'axios'

function ProductsAPI() {
    const [products, setProducts] = useState([])

    const getProducts = async ()=>{
        const res = await axios.get()
    }    




  return (
    <div>ProductsAPI</div>
  )
}

export default ProductsAPI