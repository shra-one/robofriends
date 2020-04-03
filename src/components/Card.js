import React from 'react'

const Card = ({robot}) => {
 
    
    return (
        <div className="card">
            <img src={`https://robohash.org/${robot.id}.png?size=200x200`}></img>
            <div className="card-body">
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    )
}

export default Card
