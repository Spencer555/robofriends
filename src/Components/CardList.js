import React from 'react'
import Card from './Card';


// this is a pure function that receives something returns something 
// if robots are the same it returns the same thing its deteministic


const CardList = ({robots}) => {
   
        const cardComponent =  robots.map((element, i) => {
            return (
            <Card 
            key={i} 
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            />
            )
        })
        return cardComponent
}



export default CardList