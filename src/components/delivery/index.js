import React from 'react'
import './delivery.css';
import Filters from '../common/filters';
import DeliveryCollection from './deliveryCollection';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurants } from '../../data/restaurants';

const deliveryFilters=[

  {
     id:1,
     icon: <i className="fi fi-rr-settings-sliders absolute-center"/>,
     title:' Filter',
     
  },
   
  {
    id:2,
  
    title:'Rating 4.0+',
    
 },

 {
  id:3,

  title:'Safe and Hygienic',
  
},

{
  id:4,
 
  title:'Pure Veg',
  
},

{
  id:5,
  title:"Delivery Time",
  icon: <i class="fi fi-rr-sort-alt absolute-center"></i>
  
},

{
  id:6,
  title:'Great offers',
  
}

]


const restaurantList=restaurants;


function Delivery() {
  return (
    <div>
      <div className='max-width'>
      
      <Filters filterList={deliveryFilters}/>

         
      </div>
     
     <DeliveryCollection/>

     <TopBrands/>

     <ExploreSection List={restaurantList} collectionName='Delivery Restaurants in indore' />

    </div>
  )
}

export default Delivery
