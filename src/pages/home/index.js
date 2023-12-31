import React, { useState } from 'react'
import Footer from '../../components/common/footer';
import TabOption from '../../components/common/tabOptions';
import Header from '../../components/common/header';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightlife';


function HomePage() {
 
  const[activeTab , setActiveTab]= useState("Delivery")

 
 
  return (
    <div >
    
        <Header/>
        <TabOption activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
				<Footer/>
					
    </div>
  );
}


const getCorrectScreen=(tab)=>{

  switch(tab){
 
    case "Delivery":
      return <Delivery/>

    case "Dining Out":
      return <DiningOut/>

    case "NightLife":
      return <NightLife/>

    default:
      return <Delivery/>


  }

}

export default HomePage
