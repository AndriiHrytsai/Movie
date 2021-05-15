import React, {useEffect, useState} from "react";
import {getMovieID, getMovieVideo} from "../../services/api.movie-tmdb";
import "./MovieListDetails.css"
import MovieVideo from "./MovieVideo";

export default function MovieListDetails({item}) {
    let {match: {params: {id}}} = item
    let [movieDetails, setMovieDetails] = useState(null)
    let [movieVideo, setMovieVideo] = useState(null)
    useEffect(() => {
        getMovieID(id).then(value => setMovieDetails(value.data))
    }, [id])
    useEffect(() => {
        getMovieVideo(id).then(value => setMovieVideo(value.data.results))
    }, [id])
    console.log(movieDetails);
    console.log(movieVideo);
    return (

        <div>
            {
                movieDetails &&
                (<div className={"detailsInfo"}>
                    <div className={"detailsImage"}>
                        <img src={"https://image.tmdb.org/t/p/w300" + movieDetails.poster_path} alt=""/>
                    </div>
                    <div className={'wrapper'}>
                        <div className={"movieDetailsContainer"}>
                            <div className={"movieDetailsHeader"}>
                                {<h1>{movieDetails.title}</h1>}
                                {<h3>{movieDetails.release_date}</h3>}
                            </div>
                            <div className={"movieGanres"}>
                                Genres :
                                {
                                    movieDetails.genres.map(value => {
                                        return <span key={value.id}> <li>{value.name}</li>  </span>
                                    })
                                }
                                <div className={"movieDetailsPopularity"}>
                                    Popularity : {movieDetails.popularity}<br/>
                                    Time : {movieDetails.runtime}<br/>
                                    Original language : {movieDetails.original_language}
                                </div>
                                <div className={"movieDetailsFigure"}>{movieDetails.vote_average}</div>
                            </div>
                        </div>
                        <div className={'movieDetailsOverview'}>{movieDetails.overview}</div>
                    </div>
                </div>)
            }
            {
                movieVideo && (movieVideo.map((value, index) => {
                    if (index === 0) {
                        return <MovieVideo
                            key={value.id}
                            item={value}
                        />
                    }
                }))
            }
        </div>
    )
}
