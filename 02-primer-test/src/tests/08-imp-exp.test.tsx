import 'jest';
import { getHeroesById, getHeroesByOwner } from '../base/08-imp-exp';
import heroes from '../data/heroes';


describe('Pruebas en funciones de Heroes', () => {
    test('debe de retornar un Heroe por id ', () => {
        const id = 1;
        const heroe = getHeroesById(id);
        const heroeTest = heroes.find(heroe => heroe.id === id);
        expect(heroe).toEqual(heroeTest)
    })

    test('debe de retornar un undefined si el Heroe no existe', () => {
        const id = 10;
        const heroe = getHeroesById(id);
        expect(heroe).toBe(undefined);
    })

    test('debe de retornar un arreglo con los Heroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        const heroesTest = heroes.filter(heroe => heroe.owner === owner);
        expect(heroesDC).toEqual(heroesTest);
    })

    test('debe de retornar un arreglo con los Heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);
        expect(heroesMarvel.length).toEqual(2);
    })
    
    
    
    
    
})
