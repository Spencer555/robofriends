import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>

            <img src={`https://robohash.org/${props.id}?200X200`} alt="robots" />
            <div className='tc'>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;