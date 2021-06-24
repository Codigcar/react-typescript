import { heroes_data } from "../data/heroes";


export const getHeroById = (id) => {
  // Filtrar uno solo con 'find'
  return heroes_data.find((heroe) => heroe.id === id);
};
