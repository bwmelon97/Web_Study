import React from "react";
import { gql, useQuery } from '@apollo/client';

import { Home_Movie } from "../types";
import HomeComponent from "../components/Home";
import { moviesContainIsLikedVar } from "../apollo";


const GET_MOVIES = gql`
    {
        movies(limit: 10, minimum_rating: 8, page: 2) {
            id,
            medium_cover_image
        }
    }
`;

const GET_MOVIES_CONTAIN_ISLIKED = gql`
    query getMoviesContainIsLiked {
        moviesContainIsLiked @client
    }
`

function Home () {

    const { loading, error, data } = useQuery<{movies: Home_Movie[]}> (GET_MOVIES);
    const { data: data2 } = useQuery(GET_MOVIES_CONTAIN_ISLIKED);

    if( data ) {
        moviesContainIsLikedVar(data.movies.map(m => {
            return {
                ...m,
                isLiked: false
            }
        }))
    }

    console.log(data2); 

    if ( error ) { return <h1>{error.message}</h1> }
    return (
        <HomeComponent loading={loading} moviesContainIsLiked={moviesContainIsLikedVar()} />
    )
}

export default Home