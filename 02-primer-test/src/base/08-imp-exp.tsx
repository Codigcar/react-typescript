import heroes from '../data/heroes';


export const getHeroesById = (id: number) => {
    return heroes.find(heroe => heroe.id === id);
}

export const getHeroesByOwner = (owner: string) => {
    return heroes.filter(heroe => heroe.owner === owner);
}