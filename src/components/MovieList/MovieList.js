import "./MovieList.css"
import {Link} from "react-router-dom";

export default function MovieList({item}) {

    const like = (e) => {
        e.preventDefault();
        const like = {
            id: item.id,
            name: item.title,
            photo: item.poster_path
        }
        localStorage.setItem("like" + item.id, JSON.stringify(like))
    }
    return (
        <div className={'movieInfo'}>
            <div className={"movieInfoImg"}><img src={'https://image.tmdb.org/t/p/w300' + item.poster_path}
                                                 alt={item.id}/></div>
            <Link className={"movieInfoLink"} to={"/movie/" + item.id}><p>{item.title}</p></Link>

            <p className={'vote_average'}>{item.vote_average}</p>
            <button className={'likeButtonOne'} onClick={like}>Like</button>
        </div>
    )
}