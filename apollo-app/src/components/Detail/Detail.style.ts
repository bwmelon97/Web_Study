import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);

    color: white;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`;

    export const ErrorMessage = styled.div`
        font-size: 3rem;
        font-weight: bold;
    `;

    export const ContentContainer = styled.div`
        padding: 0 10vw;
        width: 80vw;
        
        display: flex;
        flex-flow: column nowrap;
    `;

        export const MovieContainer = styled.div`
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
        `;

            export const MovieInfoBox = styled.div`
                flex: 1;
                display: flex;
                flex-flow: column nowrap;
            `;

                export const MovieTitle = styled.div`
                    margin: 0 0 1rem 0;
                    font-size: 3rem;
                    font-weight: bold;
                `;

                export const MovieRating = styled.div`
                    margin-bottom: 0.5rem;
                    font-size: 1.5rem;
                `;

            export const PosterImage = styled.div<{url: string}>`
                margin-left: 5vw;
                flex: 0 300px;
                height: 500px;

                background-image: url(${props => props.url});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;

                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
                border-radius: 7px;
            `;