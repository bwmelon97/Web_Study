type Person = {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other'
}

type PersonWithID = Person & {
    id: number;
}

const soogeun: Person = {
    name: 'Park Soogeun',
    age: 25,
    gender: 'male'
}

const room9: Person[] = [
    soogeun,
    {
        name: '김태형',
        age: 24,
        gender: 'male'
    },
    {
        name: '신현승',
        age: 22,
        gender: 'male'
    },
    {
        name: '김성모',
        age: 22,
        gender: 'male'
    },
    {
        name: '김지성',
        age: 22,
        gender: 'male'
    },
    {
        name: '김지우',
        age: 22,
        gender: 'male'
    },
    {
        name: '현승엽',
        age: 22,
        gender: 'male'
    },
]

export const people: PersonWithID[] = room9.map((member, id) => ({...member, id}));

export const getPersonByID = (id: number) => people.filter( person => person.id === id )[0];