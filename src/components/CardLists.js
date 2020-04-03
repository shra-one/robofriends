import React from 'react'
import Card from './Card'

const CardLists = ({data}) => {

    
    
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
