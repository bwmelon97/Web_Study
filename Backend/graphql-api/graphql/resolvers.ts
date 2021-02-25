import { getPersonByID, people } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getPersonByID(id),
    }
}

export default resolvers;