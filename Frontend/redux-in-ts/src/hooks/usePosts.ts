import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getPostsReq, getPostReqById } from "../modules/posts";

function usePosts (id?: number) {
    const posts = useSelector( (state: RootState) => state.posts.posts )
    const post = useSelector( 
        (state: RootState) => state.post.post[id as number] 
    ) || {
        loading: false,
        data: null,
        error: null
    }

    const dispatch = useDispatch();
    const getPosts = useCallback( () => { dispatch(getPostsReq()) }, [dispatch])
    const getPost = useCallback( (id: number) => { dispatch(getPostReqById(id)) }, [dispatch])

    return {
        post, posts,
        getPost, getPosts
    }
}

export default usePosts;