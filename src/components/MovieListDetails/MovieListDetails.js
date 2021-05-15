import {useEffect, useState} from "react";
import {getMovieID} from "../../services/api.movie-tmdb";

export default function MovieListDetails({item}) {
    let {match: {params: {id}}} = item
    let [movieDetails, setMovieDetails] = useState(null)
    useEffect(() => {
        getMovieID(id).then(value => setMovieDetails(value.data))
    }, [id])
    return (
        <div>
            {
                JSON.stringify(movieDetails)
            }
        </div>
    )
}
