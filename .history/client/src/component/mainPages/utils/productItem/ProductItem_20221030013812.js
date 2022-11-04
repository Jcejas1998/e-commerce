import React from 'react'

function ProductItem({product}) {
  return (
    <div className='product_card'>
        <img src={product.images.url} alt=''/>
        <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <span>${product.description}</span>
        </div>
    </div>
  )
}

export default ProductItem