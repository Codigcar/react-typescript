import React from 'react'
import { HeroeInterface } from './SearchScreen';

export const HeroeFound = (heroe:HeroeInterface) => {
    return (
        <div className="heroesfound-items">
            <img className="search-item-img" src={`../assets/heroes/${heroe.id}.jpg`} alt="" />
            <div className="heroesfound-info">
                <h4>{heroe.superhero}</h4>
                <p>{heroe.alter_ego}</p>
                <p>{heroe.first_appearance}</p>
            </div>
        </div>
    )
}
