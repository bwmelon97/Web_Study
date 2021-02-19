import React from "react";

import * as S from "./Home.style";
import { DefaultMovie } from "../../types";
import { toggleMovieLike } from "../../apollo";


type Props = {
    loading: boolean;
    moviesContainIsLiked: DefaultMovie[]
}

function Home ({loading, moviesContainIsLiked}: Props) {

    console.log(moviesContainIsLiked);

    return (
        <S.Container>
            <S.Header>
                <S.Title> Soogeun's Movie App </S.Title>
                <S.Subtitle> This App is made by GraphQL & Apollo </S.Subtitle>
            </S.Header>
            <S.Body>
                {loading ? <S.Message> Loading... </S.Message> :
                //  !moviesContainIsLiked ? <S.Message> No data </S.Message> :
                    <S.MovieGrid>
                        { moviesContainIsLiked.map( (m, idx: number) => 
                            <S.MovieBlock key={idx} >
                                <S.MovieLink to={`/detail/${m.id}`} url={m.medium_cover_image} />
                                <button onClick={() => toggleMovieLike(m.id) } > { m.isLiked ? 'Unlike' : 'Like' } </button> 
                            </S.MovieBlock>
                        ) }
                    </S.MovieGrid>
                }
            </S.Body>

        </S.Container>
    )
}



export default Home