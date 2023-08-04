import React from 'react'
import './deliveItem.css'

function DeliveryItem({item}) {
  return (
    <div>
         <div className='delivery-item-cover'>
           <img src={item.Cover} className='delivery-item-image' alt={item.title}/>
         </div>
     
     <div className='delivery-item-title'>{item.title}</div>

    </div>
   
  )
}

export default DeliveryItem
