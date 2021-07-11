import { doesNotReject } from 'assert';
import 'jest';
import { getHeroesByIdAsync } from '../base/09-promesas';
import heroes from '../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroesByIdAsync debe de retornar un Heroe async', (done) => {
        const id = 1;        
        getHeroesByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
    })
    test('debe de obtener un error si el Héroe por id no existe', (done) => {
        const id = 10;
        getHeroesByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el heroe');
                done();
            })
        
    })
    
    
    
})
