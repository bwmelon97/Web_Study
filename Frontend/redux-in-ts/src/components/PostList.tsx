import React, { useEffect } from "react";

import { usePosts } from "../hooks";


function PostList () {

    const { posts, getPosts } = usePosts();
    const { loading, data } = posts;
    useEffect( getPosts, [getPosts] )

    return (
        <div> 
        { 
            loading ? "loading..." :
            data?.map( p => <ul>{p.title}</ul> )
        } 
        </div>
    )
}

export default PostList;