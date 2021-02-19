import React from "react";

import * as S from "./Home.style";
import { Home_Movie } from "../../types";


type Props = {
    loading: boolean;
    data: {
        movies: Home_Movie[]
    } | undefined;
}

function Home ({loading, data}: Props) {

    console.log(data);

    return (
        <S.Container>
            <S.Header>
                <S.Title> Soogeun's Movie App </S.Title>
                <S.Subtitle> This App is made by GraphQL & Apollo </S.Subtitle>
            </S.Header>
            <S.Body>
                {loading ? <S.Message> Loading... </S.Message> :
                 !data ? <S.Message> No data </S.Message> :
                    <S.MovieGrid>
                        { data.movies.map( (m, idx: number) => 
                            <S.MovieBlock>
                                <S.MovieLink to={`/detail/${m.id}`} url={m.medium_cover_image} />
                            </S.MovieBlock>
                        ) }
                    </S.MovieGrid>
                }
            </S.Body>

        </S.Container>
    )
}



export default Home