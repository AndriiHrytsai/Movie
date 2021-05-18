import "./MovieListDetails.css"
import {useState} from "react";

export default function MovieLike() {
    let likesMovie = JSON.parse(localStorage.getItem("like"))
    let [newLike, setNewLike] = useState(likesMovie)
    const delLike = (id) => {
        setNewLike(likesMovie.filter(value => value.id !== id))
    }
    localStorage.setItem("like", JSON.stringify(newLike))
    // console.log(likesMovie)
    return (
        <div className={"likeWrapper"}>
            <div className={"likeWrapperContainer"}>
                {
                    newLike && newLike.map(value => <div className={"likeContainer"} key={value.id}>
                        <img className={"likePhoto"} src={"https://image.tmdb.org/t/p/w200" + value.photo}
                             alt="posterPath"/>
                        <p className={"likeTitle"}> {value.title}</p>
                        <button
                            className={"delLikeMovie"} onClick={() => {
                            delLike(value.id)
                        }}>X
                        </button>
                    </div>)
                }
            </div>
        </div>
    )
}
