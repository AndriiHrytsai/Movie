import "./MovieList.css"

export default function MovieList({item}) {
    /*  const {title,popularity,release_date}=props*/
    /* poster_path*/
    return (
        <div className={'movieInfo'}>
            <img src={'https://image.tmdb.org/t/p/w300' + item.poster_path} alt={item.id}/>
            <p>{item.title}</p>

        </div>
    )
}