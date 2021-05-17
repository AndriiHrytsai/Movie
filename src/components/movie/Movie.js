import {useEffect, useState} from 'react';
import {getMovie, searchMovie} from "../../services/api.movie-tmdb";
import MovieList from "../MovieList/MovieList";
import "./Movie.css"
import {Switch} from "@material-ui/core/";

export default function Movie() {
    let [movie, setMovie] = useState([]);
    let [page, setPage] = useState(1);
    let [totalPages, setTotalPages] = useState(null)
    let [text, setText] = useState("")
    let [] = useState('i')
    const nextPage = () => {
        if (page < 500) {
            setPage(page + 1)
        }
    }
    const previous = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const endPage = () => {
        setPage(page = totalPages)
    }
    const firstPage = () => {
        setPage(page = 1)
    }
    let [status, setStatus] = useState(false)
    const add = () => {
        if (status) {
            setStatus(false)
        } else {
            setStatus(true)
        }
        // setStatus(!status)
    }
    useEffect(() => {
        getMovie(page).then(
            value => {
                setMovie([...value.data.results])
                setTotalPages(value.data.total_pages)
            },
        )
        searchMovie(text, page).then(
            value => {
                setMovie([...value.data.results])
                setTotalPages(value.data.total_pages)
            })
    }, [text, page])

    console.log(movie)
    console.log(totalPages)
    return (
        <div>
            <div className={"searchContainer"} style={status ? {background: "gold"} : {background: "none"}}>
                <input onChange={(ev) => {
                    setText(ev.target.value)
                }} className={"search"}
                       placeholder={"Search"}
                />
                <Switch onChange={add}/>

            </div>
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
                <div className={"storyPage"}>
                    <button onClick={firstPage}>First</button>
                    <button onClick={previous}>Previous</button>
                    <span>{page}</span>
                    <button onClick={nextPage}>Next</button>
                    <button onClick={endPage}>Last</button>
                </div>
            </div>
        </div>
    )
}