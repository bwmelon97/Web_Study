import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getPostsReq, getPostReqById, clearPostAction } from "../modules/posts";

function usePosts () {
    const posts = useSelector( (state: RootState) => state.posts.posts )
    const post = useSelector( (state: RootState) => state.posts.post )

    const dispatch = useDispatch();
    const getPosts = useCallback( () => { dispatch(getPostsReq()) }, [dispatch])
    const getPost = useCallback( (id: number) => { dispatch(getPostReqById(id)) }, [dispatch])
    const clearPost = useCallback( () => dispatch(clearPostAction()), [dispatch] )

    return {
        post, posts,
        getPost, getPosts, clearPost
    }
}

export default usePosts;