import 'jest';
import { getImagen } from '../base/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    test('deeb de retornar el url de la iamgen', async() => {
        const url = await getImagen();
        console.log(url);
        // expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);
    })
    
    
})



