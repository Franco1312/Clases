import { devolverNumerosMayoresACinco } from './ejercicios--clase-1'
import { sumar } from './ejercicios--clase-1'

describe('[CLASE 1]', () => {

    const mockNúmeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    it('return numbers greater than 5 ', () => {

        const response = devolverNumerosMayoresACinco(mockNúmeros)
        expect(response.length).toBe(5)
        expect(response).toEqual([6, 7, 8, 9, 10])
    })

    it('sum numbers ', () => {
        
        const response = sumar(mockNúmeros)

        expect(response).toEqual(55)
        expect(response).toBeDefined()
    })

})