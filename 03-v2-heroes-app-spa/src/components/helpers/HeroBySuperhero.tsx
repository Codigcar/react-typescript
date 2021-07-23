import { heroes_data } from '../data/heroes';


export const HeroBySuperhero = (superhero = '') => {
    if(superhero === ''){
        return [];
    }

    superhero = superhero.toLocaleLowerCase();
    return heroes_data.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(superhero));

}
