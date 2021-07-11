import 'jest';

describe('demo', () => {
    test('nombres iguales ', () => {
        const var1 = 'Carlos';
        const var2 = 'Carlos';
        expect(var1).toBe(var2);
    })
});
