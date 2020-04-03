import React from 'react'
import Card from './Card'

const CardLists = ({data}) => {
 if(true){
     throw new Error('nooooo')
 }
    
    
    return (
        <div className="cardlists">
           {
           data.map((robot, i)=>
           <Card 
           key={i} 
           robot={robot}
           />)
           }
           
        </div>
    )
}

export default CardLists
