import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import { usePosts } from "../hooks";


function PostList () {

    const { posts, getPosts } = usePosts();
    const { loading, data } = posts;
    useEffect( getPosts, [getPosts] )

    return (
        <div> 
        { 
            loading ? "loading..." :
            data?.map( p => <ul><Link to={`/posts/${p.id}`} >{p.title}</Link></ul> )
        } 
        </div>
    )
}

export default PostList;