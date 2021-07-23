import React from 'react'
import { heroes_data } from '../data/heroes';

export const getHeroesById = (id:string) => {
    return heroes_data.find(hero => hero.id === id);
    // retorna unu objeto solo, no un array []
}
