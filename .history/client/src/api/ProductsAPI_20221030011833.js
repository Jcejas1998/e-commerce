import React,{useState, useEffect} from 'react'
import axios from 'axios'

function ProductsAPI() {
    const [products, setProducts] = useState([])

    const getProducts = async ()=>{
        const res = await fetch.get('http://localhost:5000/api/products')
        console.log(res);
    }    

    useEffect(()=>{
        getProducts()
    }, [])


  return {
    products: [products, setProducts]
  }
}

export default ProductsAPI