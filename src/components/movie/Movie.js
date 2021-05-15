import {useEffect, useState} from 'react';
import {getMovie} from "../../services/api.movie-tmdb";
import MovieList from "../MovieList/MovieList";
import "./Movie.css"

export default function Movie() {
    let [movie, setMovie] = useState([]);
    let [page, setPage] = useState(1);
    let [totalPages, setTotalPages] = useState(null)
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
    useEffect(() => {
        getMovie().then(value => console.log(value))
    }, [])
    useEffect(() => {
        getMovie(page).then(
            value => {
                setMovie([...value.data.results])
                setTotalPages(value.data.total_pages)
            },
        )
    }, [page])
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
            <div className={"storyPage"}>
                <button onClick={firstPage}>First</button>
                <button onClick={previous}>Previous</button>
                <span>{page}</span>
                <button onClick={nextPage}>Next</button>
                <button onClick={endPage}>Last</button>
            </div>
        </div>
    )
}