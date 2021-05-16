import "./MovieListDetails.css"
import MovieDelete from "./MovieDelete";
import {useState} from "react";

export default function MovieLike() {
    const localData = [];
    const movieData = [];
    for (let i in localStorage) {
        if (i.startsWith("like")) {
            localData.push(i)
        }
    }
    localData.map(value => {
        return movieData.push(JSON.parse(localStorage.getItem(`${value}`)))
    })
    // let [del, setDel] = useState([])
    // const deleteLike = () => {
    //     setDel(movieData)
    //     // movieData.filter((value => value.id !== id))
    // }
    return (
        <div className={"likeWrapper"}>
            {
                // movieData.map(value => <div className={"likeContainer"} key={value.id}>
                //     <img className={"likePhoto"} src={"https://image.tmdb.org/t/p/w200" + value.photo} alt="likePhoto"/>
                //     <p className={"likeTitle"}>{value.name}</p>
                //     <button className={"likeButton"} style={{background: "red"}}>Delete</button>
                // </div>)
                movieData.map(value => <MovieDelete
                value={value}
                />)
            }

        </div>
    )
}