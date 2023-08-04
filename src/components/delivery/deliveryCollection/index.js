import React from 'react'
import'./deliveryCollection.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from "react-slick";
import DeliveryItem from './deliveryItem';
const deliveryItem=[

    {
      id:1,
      title:'Mithai',
      Cover:"https://b.zmtcdn.com/data/pictures/6/19306496/595d445f6e62699f3f20c65f69a0f884_o2_featured_v2.png", 

    },

    {
        id:2,
        title:'Samosa',
        Cover:"https://b.zmtcdn.com/data/pictures/8/18751458/c6070724005afc1bf968d4bb36370a09_o2_featured_v2.jpg"
  
      },

      {
        id:3,
        title:'South',
        Cover:"https://b.zmtcdn.com/data/pictures/chains/5/19339295/62fd0e5ed0f3920c6ea9814238d60f9a_o2_featured_v2.jpg", 
  
      },


      {
        id:4,
        title:'Sandwitch',
        Cover:"https://b.zmtcdn.com/data/pictures/0/19186190/aa54bdc0e24bd2113ac80a0a0daf08b2_o2_featured_v2.jpg", 
  
      },

      {
        id:5,
        title:'Dosa',
        Cover:"https://b.zmtcdn.com/data/pictures/3/19512593/007b6a6e20cf08720fb85f68e5446516_o2_featured_v2.jpg", 
  
      },

      {
        id:6,
        title:'Pizza',
        Cover:"https://b.zmtcdn.com/data/pictures/1/20690041/33d86bcffc824ed629089afa69c72515_o2_featured_v2.jpg", 

      },



];


const settings = {
   
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>, 
    prevArrow:<PrevArrow/>
  };


function DeliveryCollection() {
  return (
    <div className='delivery-collection'>
      <div className='max-width'>

        <div className='collection-title'>Eat What Makes You Happy</div>
         
         <Slider{...settings}>
         
         {deliveryItem.map((item)=>{

          return <DeliveryItem item={item}/>
         
         })}


         </Slider>

      </div>

    </div>
  )
}

export default DeliveryCollection
