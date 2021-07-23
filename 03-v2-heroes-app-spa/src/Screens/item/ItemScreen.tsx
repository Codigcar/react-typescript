import React from 'react'
import { HeroesInterface } from '../dc/DCScreen';

export const ItemScreen = (props: HeroesInterface) => {
    return (
        <div className="card-items">
            <img className="card-item-img" src={`./assets/heroes/${props.id}.jpg`} alt="" />
            <div className="card-item-info">
                <h3>{props.superhero}</h3>
                <p>{props.characters}</p>
                <p>{props.first_appearance}</p>
                <a href={`/dc/${props.id}`}>Más...</a>
            </div>
        </div>
    )
}
