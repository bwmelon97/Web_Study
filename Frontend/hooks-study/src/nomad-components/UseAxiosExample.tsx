import React, {  } from 'react';
import { useAxios, useNetwork } from '../nomad-hooks';


function UseAxiosExample () {

    type Meow = { file: string }
    const { data, loading, error, reFetch } = useAxios<Meow>({ url: 'https://aws.random.cat/meow'});
    const isOnline = useNetwork();

    return (
        <div>
            <h1> {data && data.file} </h1>
            <h2> {loading && 'Loading' } </h2>
            <h2> {error && error.message} </h2>
            <h2> {!isOnline && 'Offline'} </h2>
            <button onClick={reFetch} > Fetch Item ! </button>
        </div>
    )
}

export default UseAxiosExample;