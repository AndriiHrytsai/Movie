import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Movie from "./components/movie/Movie";
import Home from "./components/home/Home";
import MovieListDetails from "./components/MovieListDetails/MovieListDetails";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={"/"} render={() => {
                        return <Home/>
                    }}/>
                    <Route exact path={"/movie"} render={() => {
                        return <Movie/>
                    }}/>
                    <Route path={"/movie/:id"} render={(props) => {
                        return <MovieListDetails item={props}/>
                    }}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
