import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Movie from "./components/movie/Movie";
import Home from "./components/home/Home";
import MovieListDetails from "./components/MovieListDetails/MovieListDetails";
import MovieLike from "./components/MovieListDetails/MovieLike";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className={"App"}>
            <Router>
                <Header/>
                <div className={"AppContainer"}>
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
                        <Route exact path={"/like"} render={() => <MovieLike/>}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
