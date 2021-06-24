import { heroes_data } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no encontrado`);
  }

  // Filtrar un listado con 'filter'
  return heroes_data.filter((heroe) => heroe.publisher === publisher);
};
