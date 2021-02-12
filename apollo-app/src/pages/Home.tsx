import React from "react";
import { gql, useQuery } from '@apollo/client';

import { Home_Movie } from "../types";
import HomeComponent from "../components/Home";


const GET_MOVIES = gql`
    {
        movies(limit: 10, minimum_rating: 8, page: 2) {
            id,
            medium_cover_image
        }
    }
`;

function Home () {

    const { loading, error, data } = useQuery<{movies: Home_Movie[]}> (GET_MOVIES);

    if ( error ) { return <h1>{error.message}</h1> }
    return (
        <HomeComponent loading={loading} data={data} />
    )
}

export default Home