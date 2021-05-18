import {useEffect, useState} from "react";
import {getPopularMovie} from "../../services/api.movie-tmdb";
import "./Home.css"

export default function Home() {
    const [popularMovie, setPopularMovie] = useState([])
    useEffect(() => {
        getPopularMovie().then(value =>
            setPopularMovie([...value.data.results])
        )
    }, [])
    return (
        <div className={"popular-container"}>
            {
                popularMovie.map(value => {
                    return<img key={value.id}
                                src={"https://image.tmdb.org/t/p/original" + value.backdrop_path}
                                alt={value.id}/>
                })

            }
        </div>

    )
}