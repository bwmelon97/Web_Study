import React from "react";
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";

const GET_MOVIES = gql`
    {
        movies(limit: 10, minimum_rating: 8, page: 2) {
            id,
            medium_cover_image
        }
    }
`;

type Movie = {
    id: number;
    medium_cover_image: string;
}

function Home () {

    const { loading, error, data } = useQuery(GET_MOVIES);

    if (loading) { return <h1>loading...</h1> }
    if (error) { return <h1>{error}</h1> }

    return (
        data.movies.map( (m: Movie, idx: number) => {
            return (
                <Link to={`/detail/${m.id}`} >
                    <img src={m.medium_cover_image} alt='Movie Cover' key={idx} />
                </Link>
            )
        })
    )
}

export default Home