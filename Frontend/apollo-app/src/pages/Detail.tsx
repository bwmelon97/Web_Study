import React from "react";
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import DetailComponent from "../components/Detail";
import { Detail_Movie } from "../types";


const GET_MOVIE_BY_ID = gql`
    query getMovie($movie_id: Int!) {
        movie(movie_id: $movie_id) {
            title
            rating
            genres
            description_intro
            medium_cover_image
        }
    }
`;

function Detail () {
    const { id } = useParams<{id?: string}>();
    return id ? <DetailGetData id={id} /> : <h1>This is isvalid page :(</h1>
}

function DetailGetData ({id}: {id: string}) {
    const { loading, error, data } = useQuery<{movie: Detail_Movie}>(GET_MOVIE_BY_ID, {
        variables: { movie_id: +(id) }
    })

    if( error ) return <h1>{error.message}</h1>
    return (
        <DetailComponent loading={loading} data={data} />
    )
}

export default Detail;