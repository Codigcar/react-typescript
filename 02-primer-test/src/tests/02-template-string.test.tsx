import 'jest';
import { getSaludo } from '../base/02-template-string';

describe('Pruebas en 02-template-string.tsx', () => {
    test('getsaludo debe de retornar hola Carlos ', () => {
        const nombre = 'Carlos';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola Carlos')
    })
        
})