import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({product}) {
  return (
    <div className='product_card'>
        <img src={product.images.url} alt=''/>
        <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <span>${product.description}</span>
        </div>

        <div className='row_btn'>
            <Link id='btn_buy' to="#!">
              Buy
            </Link>
        </div>
    </div>
  )
}

export default ProductItem