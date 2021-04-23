import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';

import { usePosts } from "../hooks";


function PostDetail () {

    const { id } =  useParams<{id: string}>()
    const { post, getPost } = usePosts(+id);
    useEffect(() => { getPost(+id) }, [getPost, id]);
    const { loading, data } = post;

    const history = useHistory();
    const goToHome = () => history.push('/posts');

    return (
        <div>
            {
                loading && !data ? 'loading...' :
                <div>
                    <button onClick={goToHome} >홈으로 이동</button>
                    <h1> {data?.title} </h1>
                    <p> {data?.body} </p>
                </div>
            }
        </div>
    )
}

export default PostDetail;