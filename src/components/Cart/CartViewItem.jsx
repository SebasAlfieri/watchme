import React from 'react'
import "./CartView.css"

function CartViewItem(item) {
  let { title, price, count, img } = item

  return (
    <div  className='cartViewContainers'>
    <div className='cartViewImg' style={{backgroundImage: `url(${img})`}}>
    </div>
    <div className='cartViewText'>
      <h3>{title}</h3>
      <h4>$ {price}/u</h4>
      <h5>Amount: {count}</h5>
      <h5>Total: {count * price}</h5>
    </div>
  </div>
  )
}

export default CartViewItem