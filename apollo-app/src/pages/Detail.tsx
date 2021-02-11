import React from "react";
import { useParams } from 'react-router-dom';


function Detail () {

    const { id } = useParams<{id?: string}>();
    console.log(id)

    return (
        <h1>
            Detail
        </h1>
    )
}

export default Detail