import {useEffect, useState} from 'react';
import {getMovie, searchMovie} from "../../services/api.movie-tmdb";
import MovieList from "../MovieList/MovieList";
import "./Movie.css"
import {Switch} from "@material-ui/core/";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {red} from "@material-ui/core/colors";

export default function Movie() {
    let [dark, setDark] = useState(false)
    const theme = createMuiTheme({
        palette: {
            type: "dark"
        },
    })
    const buttonTheme = createMuiTheme({
        palette: {
            primary: red,
            secondary: red,
        },
    })
    let [movie, setMovie] = useState([]);
    let [page, setPage] = useState(1);
    let [totalPages, setTotalPages] = useState(null)
    let [text, setText] = useState("")
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

    return (
        <ThemeProvider theme={dark ? theme : buttonTheme}>
            <Paper style={{height: "100%"}}>
                <div className={"movieContainerWr"}>
                    <div className={"searchContainer"}>
                        <input onChange={(ev) => {
                            setText(ev.target.value)
                        }} className={"search"}
                               placeholder={"Search"}
                        />
                        <Switch onChange={() => {
                            setDark(!dark)
                        }} checked={dark}/>
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
            </Paper>
        </ThemeProvider>
    )
}