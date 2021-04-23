import { useEffect } from 'react';
import { useParams } from 'react-router';


import { usePosts } from "../hooks";


function PostDetail () {

    const { id } =  useParams<{id: string}>()

    const { post, getPost, clearPost } = usePosts(+id);
    useEffect(() => {
        getPost(+id);
        // return () => {
        //     clearPost();
        // }
    }, [getPost, clearPost, id]);

    const { loading, data } = post;

    return (
        <div>
            {
                loading && !data ? 'loading...' :
                <div>
                    <h1> {data?.title} </h1>
                    <p> {data?.body} </p>
                </div>
            }
        </div>
    )
}

export default PostDetail;