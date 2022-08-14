const devolverNumerosMayoresACinco = require('./ejercicios--clase-1');

describe('[CLASE 1]', () => {

    it('return numbers greater than 5 ', () => {
        const mockNúmeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        const response = devolverNumerosMayoresACinco(mockNúmeros)
        expect(response.length).toBe(5)
        expect(response).toEqual([6, 7, 8, 9, 10])
    })

})