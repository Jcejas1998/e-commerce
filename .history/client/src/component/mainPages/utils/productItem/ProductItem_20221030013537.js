import React from 'react'

function ProductItem({product}) {
  return (
    <div className='product_card'>
        <img src={product.images.ul} alt=''/>
    </div>
  )
}

export default ProductItem