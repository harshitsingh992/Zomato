import React from 'react'
import "./exploreSection.css"
import { restaurants } from '../../../data/restaurants'
import ExploreCard from './exploreCard'

function ExploreSection({List , collectionName}) {
  return (
    <div className='max-width explore-section'>
      
      <div className='collection-title'>{collectionName}</div>
            
        <div className='explore-grid'>

          {List.map((restaurants)=>{

             return <ExploreCard restaurants={restaurants}/>

          })}

        </div>

    </div>
  )
}

export default ExploreSection
