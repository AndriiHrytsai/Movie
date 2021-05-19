import {useEffect, useState} from "react";
import {getNotPopularMovie, getPopularMovie} from "../../services/api.movie-tmdb";
import "./Home.css"
import {Link} from "react-router-dom";

export default function Home() {
    const [popularMovie, setPopularMovie] = useState([])
    const [notPopularMovie, setNotPopularMovie] = useState([])
    useEffect(() => {
        getPopularMovie().then(value =>
            setPopularMovie([...value.data.results])
        )
    }, [])
    useEffect(() => {
        getNotPopularMovie().then(value =>
            setNotPopularMovie([...value.data.results])
        )
    }, [])
    console.log(notPopularMovie);
    return (
        <div>
            <div className={"popularCategory"}>Top 20 films</div>
            <div className={"popular-container"}>
                {
                    popularMovie.map(value => {
                        return <div className={"sliderContainer"}><img key={value.id}
                                                           src={"https://image.tmdb.org/t/p/original" + value.backdrop_path}
                                                           alt={value.id}/>
                            <Link className={'linkPopular'} to={"/movie/" + value.id}>DETAILS</Link>
                        </div>
                    })
                }
            </div>
            <div className={"popularCategory"}>Not popular films</div>
            <div className={"popular-container"}>
                {
                    notPopularMovie.map(value => {
                        return <div className={"sliderContainer"}><img key={value.id}
                                                           src={"https://image.tmdb.org/t/p/original" + value.backdrop_path}
                                                           alt={value.id}/>
                            <Link className={'linkPopular'} to={"/movie/" + value.id}>DETAILS</Link>
                        </div>
                    })
                }
            </div>
        </div>


    )
}