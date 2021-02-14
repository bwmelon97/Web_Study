import React from "react";

import * as S from "./Detail.style";
import { Detail_Movie } from "../../types";


type Props = {
    loading: boolean;
    data: {
        movie: Detail_Movie
    } | undefined;
}

function DetailComponent ({loading, data}: Props) {

    if(loading) return <div> Loading </div>
    if(!data) return <div> no data </div>

    const {
        title,
        rating,
        medium_cover_image,
        genres,
        description_intro
    } = data.movie;

    return(

        <div>
            <h1> {title} </h1>
            <h3> {rating} </h3>
            <img src={medium_cover_image} alt='Movie Cover' />
            { genres.map((g: string, idx: number) => <span key={idx} > {g} </span> ) }
            <p> {description_intro} </p>
        </div>
    )
}



export default DetailComponent;