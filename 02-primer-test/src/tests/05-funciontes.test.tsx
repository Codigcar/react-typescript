import { getUser, getUsuarioActivo } from '../base/05-funciones';


describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: '1',
            username:'carlos123'
        }
        const user = getUser();

        expect(user).toEqual(userTest);
    })
    
    test('getUserACtivo debe retornar un objetivo', () => {
        const nombre = 'Carlos';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid:'123',
            username:'Carlos'
        })
    })
    
    
})
