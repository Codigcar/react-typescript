import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { getHeroById } from '../../selectors/getHeroById';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);
    const heroeById = getHeroById('dc-black');
    
    return (
        <div className="card-columns">
            <ul>
                {
                    heroes.map(heroe => (
                        <HeroCard key={heroe.id} {...heroe} />
                    ))
                }
            </ul>
            <div>
                {/* {
                    heroeById?.id
                } */}
            </div>
        </div>
    )
}
