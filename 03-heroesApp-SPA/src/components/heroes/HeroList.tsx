import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
// import { getHeroById } from '../../selectors/getHeroById';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {


    // const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    // const heroeById = getHeroById('dc-black');
    
    return (
        <div className="card-columns animate__animated animate__fadeInDown">
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
