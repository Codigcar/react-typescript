import { heroes_data } from '../data/heroes';


export const HeroesByPublisher = (publisher: string) => {
    return heroes_data.filter(heroe => heroe.publisher === publisher);
    // retorna un array []
}
