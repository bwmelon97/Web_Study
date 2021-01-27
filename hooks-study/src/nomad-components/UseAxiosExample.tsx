import React, {  } from 'react';
import { useAxios } from '../nomad-hooks';


function UseAxiosExample () {

    const { data, loading } = useAxios({ url: 'https://aws.random.cat/meow'});

    console.log(data)

    return (
        <div>
            <h1> {data && data} </h1>
            <h2> {loading && 'Loading' } </h2>
        </div>
    )
}

export default UseAxiosExample;