export type Home_Movie = {
    id: number;
    medium_cover_image: string;
    isLiked: boolean;
}

export type Detail_Movie = {
    title: string;
    rating: number;
    genres: string[];
    description_intro: string;
    medium_cover_image: string;
 }