import { getHeroesById } from "./08-imp-exp";

export const getHeroesByIdAsync = (id: number) => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroesById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 1500);
  });
};
