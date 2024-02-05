export type Person = {
    name: string
}

export const greet = (person: Person) => {
    return `hello ${person.name}! good day`
}
