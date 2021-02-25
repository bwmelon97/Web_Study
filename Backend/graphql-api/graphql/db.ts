type Person = {
    name: string;
    age: number;
    gender: 'MALE' | 'FEMALE' | 'OTHER'
}

type PersonWithID = Person & {
    id: number;
}

const soogeun: Person = {
    name: 'Park Soogeun',
    age: 25,
    gender: 'MALE'
}

const room9: Person[] = [
    soogeun,
    {
        name: '김태형',
        age: 24,
        gender: 'MALE'
    },
    {
        name: '신현승',
        age: 22,
        gender: 'MALE'
    },
    {
        name: '김성모',
        age: 22,
        gender: 'MALE'
    },
    {
        name: '김지성',
        age: 22,
        gender: 'MALE'
    },
    {
        name: '김지우',
        age: 22,
        gender: 'MALE'
    },
    {
        name: '현승엽',
        age: 22,
        gender: 'MALE'
    },
]

export const people: PersonWithID[] = room9.map((member, id) => ({...member, id}));

export const getPersonByID = (id: number) => people.filter( person => person.id === id )[0];