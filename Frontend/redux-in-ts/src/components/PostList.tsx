import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import { usePosts } from "../hooks";


function PostList () {

    const { posts, getPosts } = usePosts();
    const { loading, error, data } = posts;
    useEffect( getPosts, [getPosts] )

    if ( loading && !data ) return <div>loading...</div>
    if ( error ) return <div>에러입니다. {error.message}</div>

    return (
        <div> 
        {
            data?.map( (p, idx) => <ul key={idx} ><Link to={`/posts/${p.id}`} >{p.title}</Link></ul> )
        } 
        </div>
    )
}

export default PostList;