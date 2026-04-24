import { faker } from '@faker-js/faker'

export const createRandomObject = (quantity: number = 2): Record<string, any> => {
    const arr = []
    for (let index = 0; index <= quantity; index++) {
        arr.push([faker.word.noun(), faker.number.int({ max: 100 })])
    }
    return Object.fromEntries(arr)
}