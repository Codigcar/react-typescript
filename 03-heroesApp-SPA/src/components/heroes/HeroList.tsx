import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);
    const heroeById = getHeroById('dc-black');
    
    return (
        <div>
            <ul>
                {
                    heroes.map(heroe => (
                        <li key={heroe.id}>
                            {heroe.superhero}
                        </li>
                    ))
                }
            </ul>
            <div>
                {
                    heroeById?.id
                }
            </div>
        </div>
    )
}
