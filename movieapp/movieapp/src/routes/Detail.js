import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
    const { id } = useParams();

    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
        const json = await response.json();
        console.log(json);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return <h1>Detail</h1>;
}

export default Detail;
