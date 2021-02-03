const soogeun = {
    name: 'Park Soogeun',
    age: 25,
    gender: 'male'
}

const resolver = {
    Query: {
        person: () => soogeun
    }
}

export default resolver;