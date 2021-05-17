import "./MovieListDetails.css"

export default function MovieLike() {
    let likesMovie = JSON.parse(localStorage.getItem("like"))
    console.log(likesMovie)
    return (
        <div className={"likeWrapper"}>
            <div className={"likeWrapperContainer"}>
                {
                    likesMovie && likesMovie.map(value => <div className={"likeContainer"} key={value.id}>
                        <img className={"likePhoto"} src={"https://image.tmdb.org/t/p/w200" + value.photo}
                             alt="posterPath"/>
                        <p className={"likeTitle"}> {value.title}</p>
                    </div>)
                }
            </div>
        </div>
    )
}
