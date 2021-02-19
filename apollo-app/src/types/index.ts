export type DefaultMovie = {
    id: number;
    isLiked: boolean;
    medium_cover_image: string;
}

export type Home_Movie = DefaultMovie & {

}

export type Detail_Movie = DefaultMovie & {
    title: string;
    rating: number;
    genres: string[];
    description_intro: string;
}