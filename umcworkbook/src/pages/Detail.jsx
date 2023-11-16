import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Detail = () => {
    const { title } = useParams();
    const { state } = useLocation();
    const { poster_path } = state;

    console.log(state);
    console.log(title);

    return (
        <div>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} style={{width: "20%"}}/>
        </div>
    );
};

export default Detail;