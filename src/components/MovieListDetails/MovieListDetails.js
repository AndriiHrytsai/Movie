import React, {useEffect, useState} from "react";
import {getMovieID, getMovieVideo} from "../../services/api.movie-tmdb";
import "./MovieListDetails.css"
import MovieVideo from "./MovieVideo";

export default function MovieListDetails({item}) {
    let {match: {params: {id}}} = item
    let [movieDetails, setMovieDetails] = useState(null)
    let [movieVideo, setMovieVideo] = useState(null)
    let [likeItem, setLikeItem] = useState(JSON.parse(localStorage.getItem("like")) || [])
    let [flag, setFlag] = useState(false)
    useEffect(() => {
        localStorage.setItem("like", JSON.stringify(likeItem))
    })
    const like = (e) => {
        e.preventDefault();
        const likes = {
            id: id,
            photo: movieDetails.poster_path,
            title: movieDetails.title
        }
        let buttonStatus = likeItem.find(value => value.id === id)
        if (!buttonStatus) {
            likeItem.push(likes)
            setFlag(true)
        } else {
            alert(movieDetails.title + " is true")
        }
        setLikeItem([...likeItem])
    }
    console.log(likeItem)
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
                (<div style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
                    backgroundSize: "cover" }}>
                    <div className={"detailsInfo"}>
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
                                            return <span className={"genre"} key={value.id}> <li>{value.name}</li>  </span>
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

                            <button className={"likeButton"} onClick={like}>{!flag ? 'like' : 'deslike'}</button>

                        </div>
                    </div>
                </div>)
            }
            <br/>
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

