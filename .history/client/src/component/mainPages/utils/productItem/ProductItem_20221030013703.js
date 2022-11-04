import React from 'react'

function ProductItem({product}) {
  return (
    <div className='product_card'>
        <img src={product.images.ul} alt=''/>
        <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
        </div>
    </div>
  )
}

export default ProductItem