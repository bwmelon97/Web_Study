# GraphQL Study

><u>sql은 데이터베이스 시스템에 저장된 데이터</u>를 효율적으로 가져오는 것이 목적이고, <u>gql은 웹 클라이언트가 데이터를 서버로부터</u> 효율적으로 가져오는 것이 목적

## HTTP Request의 단점 - (gql이 해결하고자 하는 부분)

### Over Fetching

필요한 데이터 이상을 받는 것.

REST API의 경우, 데이터 테이블을 요청할 때 모든 필드를 받아 옴

예) user의 username만 필요하더라도 profile, email, etc. 를 모두 꺼내서 response로 보냄

### Under Fetching

필요한 데이터를 받기 위해 1번 이상의 request를 보냄.

REST API의 경우 나뉘어진 테이블 만큼의 reqest를 보내고 각각의 response를 받음

예) 앱 실행 시, feed 데이터, user데이터, notification데이터 etc. 모두 각각의 request를 보냄

## Query & Mutation
데이터를 요청하는 로직 (HTTP의 request, response에 대응)
* Query : 데이터를 가져오는 로직 (R) - HTTP GET
* Mutation : 데이터를 변형하는 로직 (CUD) - HTTP POST

## Schema
데이터 타입을 정의하는 공간.


## Resolver
Query, Mutation의 요청을 받았을 때, 해당 비즈니스 로직을 실행시키고 데이터를 반환하는 함수를 실행하는 객체.

.

---

.

## Codes

### Server Start
```typescript
import { GraphQLServer } from 'graphql-yoga';

const sever = new GraphQLServer({});
sever.start(() => console.log('GraphQL Server Start !!'));
```
* dependencies: `graphql-yoga`, `ts-node`, `typescript`, `nodemon`(global)

### Schema & Resolvers
schema.graphql
```graphql
type Movie {
    id: Int!
    name: String!
    score: Float!
}

type Query {
    movies: [Movie]!
    movie(id: Int!): Movie
}

type Mutation {
    addMovie(name: String!, score: Float!): Movie
    deleteMovie(id: Int!): Boolean!
}
```

resolvers.ts
```typescript
import { 
    getMovies, getMovieByID,
    addMovie, deleteMovie
} from "./modules";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovieByID(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
}

export default resolvers;
```

.

---

## Reference

* [GraphQL 공식 Document](https://graphql-kr.github.io/learn/)
* [GraphQL 개념잡기 - 카카오 기술 블로그](https://tech.kakao.com/2019/08/01/graphql-basic/)
