import {useEffect, useState} from 'react';
import {getMovie} from "../../services/api.movie-tmdb";
import MovieList from "../MovieList/MovieList";
import "./Movie.css"

export default function Movie() {
    let [movie, setMovie] = useState([]);
    useEffect(() => {
        getMovie().then(value => setMovie([...value.data.results]))
    }, [])
    return (
        <div className={"film"}>
            <div className={'filmContainer'}>
                {
                    movie.map((value, index) => {
                        return (<MovieList
                            key={index}
                            item={value}
                        />)
                    })
                }
            </div>
        </div>
    )
}