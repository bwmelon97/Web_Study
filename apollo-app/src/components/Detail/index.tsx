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

    return(
        <S.Container>
            { loading ? <S.ErrorMessage> Loading... </S.ErrorMessage> :
              !data ? <S.ErrorMessage> No data </S.ErrorMessage> :
              <DetailContent movie={data.movie} /> }            
        </S.Container>
    )
}

function DetailContent ({movie}: {movie: Detail_Movie}) {

    const {
        title,
        rating,
        medium_cover_image,
        genres,
        description_intro
    } = movie;

    return (
        <S.ContentContainer>
            <S.MovieContainer>
                <S.MovieInfoBox>
                    <S.MovieTitle> {title} </S.MovieTitle>
                    <S.MovieRating> Rating : {rating} </S.MovieRating>
                    { genres.map((g: string, idx: number) => <span key={idx} > {g} </span> ) }
                    <p> {description_intro} </p>
                </S.MovieInfoBox>
                <S.PosterImage url={medium_cover_image} />
            </S.MovieContainer>

        </S.ContentContainer>
    )
}

export default DetailComponent;