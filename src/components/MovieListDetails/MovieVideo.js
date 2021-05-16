import ReactPlayer from "react-player";

export default function MovieVideo({item}) {
    console.log(item.key)
    return (
        <div>
            <ReactPlayer width={"1200px"}
                         height={"600px"}
                         style={{margin: "0 auto"}}
                         url={"https://www.youtube.com/watch?v=" + item.key}/>
        </div>
    )
}