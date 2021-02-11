import React from "react";
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';


const GET_MOVIE_BY_ID = gql`
    query getMovie($movie_id: Int!) {
        movie(movie_id: $movie_id) {
            id
            title
            rating
            genres
            summary
            medium_cover_image
        }
    }
`;

//type Movie = {
//    id: number;
//    title: string;
//    rating: number;
//    genres: string[];
//    summary: string;
//    medium_cover_image: string;
//}

function Detail () {

    const { id } = useParams<{id?: string}>();
    //if (!id) return <p>It's invalid page :(</p>

    const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
        variables: { movie_id: +(id as string) }
    })

    if (loading) return <h1> loading... </h1>
    if (error) return <p> {error.message} </p>

    console.log(id);
    console.log(data);

    const {
        movie: {
            title,
            rating,
            genres,
            summary,
            medium_cover_image
        }
    } = data

    return (
        <div>
            <h1> {title} </h1>
            <h3> {rating} </h3>
            <img src={medium_cover_image} alt='Movie Cover' />
            { genres.map((g: string, idx: number) => <span key={idx} > {g} </span> ) }
            <p> {summary} </p>
        </div>
    )
}

export default Detail