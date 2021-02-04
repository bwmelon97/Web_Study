import { getPersonByID, people } from "./db";

const resolver = {
    Query: {
        people: () => people,
        person: (_, { id }) => getPersonByID(id),
    }
}

export default resolver;