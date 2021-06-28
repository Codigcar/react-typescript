import { heroes_data } from '../data/heroes';

export const getHeroesByName = (name = '') => {
    if(name === ''){
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroes_data.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));
}
